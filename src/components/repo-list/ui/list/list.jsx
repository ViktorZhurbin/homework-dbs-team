import React from "react";

import RepoPreview from "../repo-preview/repo-preview";
import Pager from "../pager/pager";

import styles from "./list.module.css";
import { useDispatch } from "react-redux";
import {
  nextPage,
  prevPage,
  selectRepo,
} from "../../../../store/actions/repos";

const List = ({ repoList, selectedPage }) => {
  const dispatch = useDispatch();
  const onSelectRepo = (repoId) => dispatch(selectRepo(repoId));
  const onPrevPage = () => dispatch(prevPage());
  const onNextPage = () => dispatch(nextPage());

  const elements = repoList.map((repo) => {
    return (
      <RepoPreview
        key={repo.id}
        repo={repo}
        onSelectRepo={onSelectRepo.bind(this, repo.id)}
      />
    );
  });

  return (
    <>
      <div className={styles.list}>{elements}</div>
      <Pager
        currentPage={selectedPage}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        isLastPage={selectedPage > 1 && repoList.length === 0}
      />
    </>
  );
};

export default List;
