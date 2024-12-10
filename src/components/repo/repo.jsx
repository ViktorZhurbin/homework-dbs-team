import React from "react";

import styles from "./repo.module.css";

const Repo = ({ onBack, repoData: { name, description } }) => (
  <div className={styles.container}>
    <div className="box box--wide">
      <div className="title">{name}</div>
      <div className={styles.content}>{description}</div>
    </div>
    <button onClick={onBack}>Back</button>
  </div>
);

export default Repo;
