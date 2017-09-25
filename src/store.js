// @flow

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from 'sagas';
import reducers from 'reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

const enhancers = compose(applyMiddleware(...middleware));

const store = createStore(reducers, enhancers);

sagaMiddleware.run(sagas);

export default store;
