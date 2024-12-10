import React from "react";
import LabeledIcon from "../labeled-icon/labeled-icon";

const RepoStats = ({ stars, forks }) => {
  if (!JSON.parse(process.env.SHOW_REPO_STATS)) {
    return null;
  }

  return (
    <>
      <LabeledIcon icon="fa-star" label={`${stars} stars`} />
      <LabeledIcon icon="fa-code-branch" label={`${forks} forks`} />
    </>
  );
};

export default RepoStats;