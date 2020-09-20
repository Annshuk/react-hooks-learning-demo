import { put, call, takeEvery, all } from "redux-saga/effects";
import { isLoadingApi, loadData, isError } from "../reducers";
import { fetchMockApi } from "../services";

const delay = ms => new Promise(res => setTimeout(res, ms));

export default function* rootSaga() {
  yield takeEvery(isLoadingApi, fetchUser);
  // yield takeEvery(isError, checkError);
}

function* fetchUser() {
  try {
    yield delay(1000);
    const response = yield call(() => fetchMockApi());
    yield put(loadData(response));
  } catch (err) {
    yield put(isError(err.message));
  }
}
