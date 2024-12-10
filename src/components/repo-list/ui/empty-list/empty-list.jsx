import React from "react";

import ErrorMessage from "../error-message/error-message";

import styles from "./empty-list.module.css";

const EmptyList = ({ error }) => (
  <div className={styles.emptyList}>
    <i className="fas fa-exclamation-circle"></i> No repos to display.
    <ErrorMessage error={error} />
  </div>
);

export default EmptyList;
