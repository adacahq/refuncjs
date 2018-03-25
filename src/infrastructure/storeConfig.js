// @flow

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import type {
  Reducer,
  Store,
} from 'redux';
import {
  persistStore,
  persistCombineReducers,
} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import createBrowserHistory from 'history/createBrowserHistory';
import { connectRoutes } from 'redux-first-router';
import createSagaMiddleware from 'redux-saga';
import type { SagaMiddleware } from 'redux-saga';
import sagas from 'sagas';
import queryString from 'query-string';
import reducers from 'reducers';
import { URL_PATHS, CONFIG } from 'constants';
import { reduxPersistTransformers } from 'infrastructure';

const history: Object = createBrowserHistory();
const options: Object = {
  initialDispatch: false,
  querySerializer: queryString,
};

const config: Object = {
  key: 'root',
  storage,
  debug: !CONFIG.IS_PROD,
  whitelist: [],
  transforms: [reduxPersistTransformers],
};

const router: Object = connectRoutes(history, URL_PATHS, options);

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const combinedReducers: Reducer = persistCombineReducers(
  config,
  Object.assign({}, { location: router.reducer }, reducers),
);

const store: Store = createStore(
  combinedReducers,
  (CONFIG.IS_PROD ? compose : composeWithDevTools)(
    router.enhancer,
    applyMiddleware(sagaMiddleware, router.middleware),
  ),
);

const persistor: any = persistStore(store, null, () => {
  router.initialDispatch();
});

sagaMiddleware.run(sagas);

export default ({
  store,
  persistor,
});
