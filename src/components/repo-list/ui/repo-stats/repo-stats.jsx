import React from "react";
import LabeledIcon from "../labeled-icon/labeled-icon";

const RepoStats = ({ stars, forks }) => (
  <>
    <LabeledIcon icon="fa-star" label={`${stars} stars`} />
    <LabeledIcon icon="fa-code-branch" label={`${forks} forks`} />
  </>
);

export default RepoStats;