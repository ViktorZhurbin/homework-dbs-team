import React from "react";

import styles from "./repo-preview.module.css";

const RepoPreview = (props) => (
  <div className={`box ${styles.repoPreview}`}>
    <div className="title">{props.repo.name}</div>
    <div className={styles.content}>
      <div>
        <div>
          <i className={`fas fa-star ${styles.icon}`}></i>
          {props.repo.stargazers_count} stars
        </div>
        <div>
          <i className={`fas fa-code-branch ${styles.icon}`}></i>
          {props.repo.forks_count} forks
        </div>
      </div>
      <button onClick={props.onSelectRepo}>Show</button>
    </div>
  </div>
);

export default RepoPreview;
