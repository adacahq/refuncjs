// @flow

import { NOT_FOUND } from 'redux-first-router';
import { PAGES } from 'constants';

const URL_PATHS: { [string]: string } = {
  [PAGES.HOME]: '/',
  [NOT_FOUND]: '/404',
};

export default URL_PATHS;
