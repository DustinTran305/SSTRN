import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
let middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares = [...middlewares, logger, sagaMiddleware];

const middleware = applyMiddleware(...middlewares);

export const store = createStore(rootReducer, middleware);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);