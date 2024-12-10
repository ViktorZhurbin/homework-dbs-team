import React from "react";

import LabeledIcon from "../repo-list/ui/labeled-icon/labeled-icon";

const RepoStats = ({ stars, forks, watchers }) => {
  if (!JSON.parse(process.env.SHOW_REPO_STATS)) {
    return null;
  }

  return (
    <>
      <LabeledIcon icon="fa-star" label={`${stars} stars`} />
      <LabeledIcon icon="fa-code-branch" label={`${forks} forks`} />
      {watchers && <LabeledIcon icon="fa-eye" label={`${watchers} watchers`} />}
    </>
  );
};

export default RepoStats;