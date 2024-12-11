import React from "react";

import styles from "./repo-preview.module.css";
import RepoStats from "../../../stats/repo-stats/repo-stats";
import { showRepoStats } from "../../../../utils/featureFlags";

const RepoPreview = (props) => {
  const { repo, onSelectRepo} = props;

  const hasStars = showRepoStats && repo.stargazers_count > 0;

  return (
    <div className={`box ${styles.repoPreview} ${hasStars ? styles.hasStars : ""}`}>
      <b>{repo.name}</b>
      <div className={styles.content}>
        <div className={styles.stats}>
          <RepoStats
            forks={repo.forks_count}
            stars={repo.stargazers_count} />
        </div>
        <button onClick={onSelectRepo}>Show</button>
      </div>
    </div>
  );
};

export default RepoPreview;
