import { put, takeEvery } from 'redux-saga/effects';
import { loadData, isLoadingApi} from './';
import mockapi from '../mockData/mock'

const delay = (ms) => new Promise(res => setTimeout(res, ms))
// Our worker Saga: will perform the async increment task
export function* loadAynch() {
  yield delay(1000)
  yield put(mockapi)
  console.log('saga')
}

// Our watcher Saga: spawn a new incrementAsync task 
export function* loadAynchData() {
  yield takeEvery(loadData, loadAynch)
  
}
function* rootSaga() {
  yield all([
    loadAynchData()
  ])
}
