import { put, call, takeEvery, all } from "redux-saga/effects";
import { isLoadingApi, loadData, isError } from "../reducers";
import { fetchMockApi } from "../services";

const delay = ms => new Promise(res => setTimeout(res, ms));

export default function* rootSaga() {
   yield takeEvery(isLoadingApi, fetchUser);
 // yield takeEvery(isError, checkError);
}

function* fetchUser(){
yield delay(500)
const response = yield call(() => fetchMockApi());
console.log(loadData(response));
}

/*
export const fetchData = () => dispatch => {
  dispatch(isLoadingApi(true));
   fetchMockApi()
    .then(response => {
      if (response) {
        dispatch(loadData(response));
      }
    })
    .catch(err => {
      dispatch(isLoadingApi(false));
      dispatch(isError(err));
    });
};
*/
