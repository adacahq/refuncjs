// @flow

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Route,
  Switch,
} from 'react-router';
import {
  DanielsPage,
  FirmansPage,
} from 'containers';

const Routes = (): React$Element<*> => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={DanielsPage} />
      <Route path="/firman" component={FirmansPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
