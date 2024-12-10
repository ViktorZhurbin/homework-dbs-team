import React from "react";

import List from "./ui/list/list";
import EmptyList from "./ui/empty-list/empty-list";
import { useSelector } from "react-redux";
import {
  getError,
  getIsLoading,
  getRepoList,
  getSelectedPage,
} from "../../store/selectors/selectors";
import NoMorePages from "./ui/no-more-pages/no-more-pages";

const RepoList = () => {
  const isLoading = useSelector(getIsLoading);
  const selectedPage = useSelector(getSelectedPage);
  const repoList = useSelector(getRepoList);
  const error = useSelector(getError);

  return (
    <>
      {isLoading && <div className="loader"></div>}
      {!isLoading && selectedPage === 1 && repoList.length === 0 && (
        <EmptyList error={error} />
      )}
      {!isLoading && !!repoList.length && (
        <List repoList={repoList} selectedPage={selectedPage} />
      )}
      {selectedPage > 1 && repoList.length === 0 && <NoMorePages />}
    </>
  );
};

export default RepoList;
