import React from "react";

import styles from "./repo.module.css";
import RepoStats from "../repo-list/ui/repo-stats/repo-stats";

const Repo = ({ onBack, repoData: { name, description, forks_count, stargazers_count } }) => (
  <div className={styles.container}>
    <div className={`box box--wide ${styles.repo}`}>
      <div className={styles.header}>
        <b>{name}</b>
        <div className={styles.stats}>
          <RepoStats
            forks={forks_count}
            stars={stargazers_count} 
          />
        </div>
      </div>
      <div className={styles.content}>{description}</div>
    </div>
    <button onClick={onBack}>Back</button>
  </div>
);

export default Repo;
