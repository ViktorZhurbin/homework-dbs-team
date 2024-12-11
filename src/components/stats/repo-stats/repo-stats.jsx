import React from "react";

import LabeledIcon from "./ui/labeled-icon/labeled-icon";
import IconGitBranch from "./ui/labeled-icon/icon-branch";
import IconStarFilled from "./ui/labeled-icon/icon-star";
import IconEye from "./ui/labeled-icon/icon-eye";
import { showRepoStats } from "../../../utils/featureFlags";

const RepoStats = ({ stars, forks, watchers }) => {
  if (!showRepoStats) {
    return null;
  }

  return (
    <>
      <LabeledIcon Icon={IconStarFilled} label={`${stars} stars`} />
      <LabeledIcon Icon={IconGitBranch} label={`${forks} forks`} />
      {watchers && <LabeledIcon Icon={IconEye} label={`${watchers} watchers`} />}
    </>
  );
};

export default RepoStats;