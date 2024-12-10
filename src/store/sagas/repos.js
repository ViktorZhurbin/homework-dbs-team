import { put, select } from "redux-saga/effects";

import {
  fetchReposFail,
  fetchReposStart,
  fetchReposSuccess,
} from "../actions/repos";

export function* fetchReposSaga(action) {
  const getSelectedUserName = (state) => state.selectedUserName;
  const getSelectedPage = (state) => state.selectedPage;

  const selectedUserName = yield select(getSelectedUserName);
  const selectedPage = yield select(getSelectedPage);

  yield put(fetchReposStart());
  const url =
    "https://api.github.com/users/" +
    selectedUserName +
    "/repos?page=" +
    selectedPage +
    "&per_page=15";
  try {
    const fetchOptions = process.env.GITHUB_AUTH_TOKEN ? {
      header: {
        Authorization: `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
      }
    } : undefined;

    const response = yield fetch(url, fetchOptions);
    const resObj = yield response.json();

    if (response.status >= 200 && response.status < 300) {
      yield put(fetchReposSuccess(resObj));
    } else {
      let errorMessage = "";
      switch (response.status) {
        case 404:
          if (resObj.message === "Not Found")
            errorMessage = "The entered user is not exist";
          else errorMessage = "Couldn't reach GitHub API.";
          break;
        case 403:
          errorMessage = resObj.message;
          break;
        default:
          errorMessage = "Something went wrong! (" + response.status + ")";
      }

      yield put(fetchReposFail(errorMessage));
    }
  } catch (error) {
    yield put(fetchReposFail(error.message));
  }
}
