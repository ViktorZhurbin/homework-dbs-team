import React from "react";
import { useSelector } from "react-redux";

import { getRepoList } from "../../store/selectors/selectors";
import RepoStats from "./repo-stats";

const TotalStats = () => {
  const repos = useSelector(getRepoList);

  const { stars, forks, watchers } = repos.reduce((acc, repo) => {
    acc.forks += repo.forks_count;
    acc.stars += repo.stargazers_count;
    acc.watchers += repo.watchers_count;

    return acc;
  }, { stars: 0, forks: 0, watchers: 0 });

  return (
    <RepoStats stars={stars} forks={forks} watchers={watchers} />
  );
};

export default TotalStats;