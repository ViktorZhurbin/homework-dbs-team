import React from "react";

import styles from "./pager.module.css";

const Pager = (props) => (
  <div className={styles.pager}>
    <button disabled={props.currentPage === 1} onClick={props.onPrevPage}>
      Prev
    </button>
    Page {props.currentPage}
    <button disabled={props.isLastPage} onClick={props.onNextPage}>
      Next
    </button>
  </div>
);

export default Pager;
