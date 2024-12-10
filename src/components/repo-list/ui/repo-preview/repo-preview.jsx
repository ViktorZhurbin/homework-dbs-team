import React from "react";

import styles from "./repo-preview.module.css";
import RepoStats from "../repo-stats/repo-stats";

const RepoPreview = (props) => (
  <div className={`box ${styles.repoPreview}`}>
    <b>{props.repo.name}</b>
    <div className={styles.content}>
      <div className={styles.stats}>
        <RepoStats 
          forks={props.repo.forks_count}
          stars={props.repo.stargazers_count} 
        />
      </div>
      <button onClick={props.onSelectRepo}>Show</button>
    </div>
  </div>
);

export default RepoPreview;
