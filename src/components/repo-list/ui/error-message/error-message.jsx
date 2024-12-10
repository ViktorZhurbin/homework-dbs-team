import React from "react";

import styles from "./error-message.module.css";

const ErrorMessage = ({ error }) =>
  error === null ? null : <div className={styles.errorMessage}>{error}</div>;

export default ErrorMessage;
