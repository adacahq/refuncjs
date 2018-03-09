// @flow

import ENVIRONMENTS from './environments';

const CONFIG: { [string]: string } = ({
  API_URL: String(process.env.API_URL),
  API_VERSION: String(process.env.API_VERSION),
  IS_PROD: String(process.env.NODE_ENV) === ENVIRONMENTS.PRODUCTION,
});

export default CONFIG;
