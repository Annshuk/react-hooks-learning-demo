import {
  applyMiddleware,
  getDefaultMiddleware,
  configureStore
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../reducers/sagas';

const configureAppStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  console.log(rootReducer);

  const store = configureStore({
    reducer: rootReducer,
    middlewares: [...getDefaultMiddleware(), applyMiddleware(sagaMiddleware)],
    preloadedState: initialState
  });

  // then run the saga
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureAppStore;
