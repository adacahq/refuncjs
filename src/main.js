// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import {
  storeConfig,
  routeComponents,
  Router,
} from 'infrastructure';

ReactDOM.render(
  <Provider store={storeConfig.store}>
    <PersistGate persistor={storeConfig.persistor}>
      <Router components={routeComponents} />
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);
