import React from "react";

import styles from "./labeled-icon.module.css";

const LabeledIcon = ({ Icon, label }) => (
  <div className={styles.labeledIcon}>
    <Icon /> {label}
  </div>
);

export default LabeledIcon;