import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./header.module.css";
import logo from "./../../gitHub-mark-64px.png";
import { fetchRepos, setSelectedUserName } from "../../store/actions/repos";
import { getRepoList, getSelectedUserName } from "../../store/selectors/selectors";
import RepoStats from "../repo-list/ui/repo-stats/repo-stats";

const Header = () => {
  const dispatch = useDispatch();

  const selectedUserName = useSelector(getSelectedUserName);
  const repos = useSelector(getRepoList);

  const { stars, forks, watchers } = repos.reduce((acc, repo) => {
    acc.forks += repo.forks_count;
    acc.stars += repo.stargazers_count;
    acc.watchers += repo.watchers_count;

    return acc;
  }, { stars: 0, forks: 0, watchers: 0 });

  useEffect(() => {
    if (selectedUserName) dispatch(fetchRepos());
  }, [])

  const handleSearchTextChange = useCallback(
    (event) => {
      dispatch(setSelectedUserName(event.currentTarget.value));
    },
    [dispatch]
  );

  const handleKeyUp = useCallback(
    (event) => {
      if (event.keyCode === 13 && selectedUserName) dispatch(fetchRepos());
    },
    [dispatch, selectedUserName]
  );

  const handleButtonClick = useCallback(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
      <div className={styles.content}>
        <div className={styles.menu}>
          <input
            type="text"
            value={selectedUserName}
            placeholder="Enter GitHub user name..."
            onChange={handleSearchTextChange}
            onKeyUp={handleKeyUp}
          />
          <button onClick={handleButtonClick} disabled={selectedUserName === ""}>
            <i className={`fas fa-search ${styles.icon}`}></i> List repos
          </button>
        </div>
        <div className={styles.stats}>
          <RepoStats stars={stars} forks={forks} watchers={watchers} />
        </div>
      </div>
    </div>
  );
};

export default Header;
