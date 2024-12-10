import { takeEvery } from "redux-saga/effects";

import { fetchReposSaga } from "./repos";
import { fetchRepos, nextPage, prevPage } from "../actions/repos";

export function* watchRepos() {
  yield takeEvery(fetchRepos().type, fetchReposSaga);
  yield takeEvery(prevPage().type, fetchReposSaga);
  yield takeEvery(nextPage().type, fetchReposSaga);
}
