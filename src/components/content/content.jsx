import React from "react";

import RepoList from "../repo-list/repo-list";
import Repo from "../repo/repo";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedRepo } from "../../store/selectors/selectors";
import { clearSelectedRepo } from "../../store/actions/repos";

const Content = () => {
  const dispatch = useDispatch();

  const selectedRepo = useSelector(getSelectedRepo);

  const onBack = () => dispatch(clearSelectedRepo());

  return selectedRepo === null ? (
    <RepoList />
  ) : (
    <Repo repoData={selectedRepo} onBack={onBack} />
  );
};

export default Content;
