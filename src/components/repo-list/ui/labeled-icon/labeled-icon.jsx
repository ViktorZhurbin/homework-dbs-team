import React from "react";

import styles from "./labeled-icon.module.css";

const LabeledIcon = ({ icon, label }) => (
  <div className={styles.labeledIcon}>
    <i className={`fas ${icon} ${styles.icon}`}></i> {label}
  </div>
);

export default LabeledIcon;