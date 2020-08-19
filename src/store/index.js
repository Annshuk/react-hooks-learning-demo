import {
  configureStore,
  applyMiddleware,
  getDefaultMiddleware,
  createStore
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";
import rootSaga from "../actions/sagas";
/*
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({  
  reducer: createAppSlice,
  middlewares: [...getDefaultMiddleware(), applyMiddleware(sagaMiddleware)]
});
*/
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;
