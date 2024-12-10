import {
  clearSelectedRepo,
  fetchRepos,
  fetchReposFail,
  fetchReposStart,
  fetchReposSuccess,
  nextPage,
  prevPage,
  selectRepo,
  setSelectedUserName,
} from "../actions/repos";

const initialState = {
  repos: [],
  loading: false,
  error: null,
  selectedRepo: null,
  selectedPage: 1,
  selectedUserName: "ericelliott",
};

const _fetchRepos = (state) => ({
  ...state,
  selectedPage: 1,
});

const _fetchReposStart = (state) => ({
  ...state,
  loading: true,
  selectedRepo: null,
});

const _setSelectedUserName = (state, { userName }) => ({
  ...state,
  selectedUserName: userName,
});

const _fetchReposSuccess = (state, { repos }) => ({
  ...state,
  loading: false,
  repos: repos,
});

const _fetchReposFail = (state, { error }) => ({
  ...state,
  loading: false,
  repos: [],
  error: error,
});

const _selectRepo = (state, { repoId }) => ({
  ...state,
  selectedRepo:
    repoId === null
      ? null
      : state.repos.filter((repo) => {
          return repo.id === repoId;
        })[0],
});

const _clearSelectRepo = (state) => ({
  ...state,
  selectedRepo: null,
});

const _nextPage = (state) => ({
  ...state,
  selectedPage: state.selectedPage + 1,
});

const _prevPage = (state) => ({
  ...state,
  selectedPage: state.selectedPage - 1,
});

const reducers = {
  [fetchRepos().type]: _fetchRepos,
  [fetchReposStart().type]: _fetchReposStart,
  [setSelectedUserName().type]: _setSelectedUserName,
  [fetchReposSuccess().type]: _fetchReposSuccess,
  [fetchReposFail().type]: _fetchReposFail,
  [selectRepo().type]: _selectRepo,
  [clearSelectedRepo().type]: _clearSelectRepo,
  [nextPage().type]: _nextPage,
  [prevPage().type]: _prevPage,
};

const reducer = (state = initialState, action) =>
  reducers[action.type] ? reducers[action.type](state, action) : state;

export default reducer;
