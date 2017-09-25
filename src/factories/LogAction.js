// @flow
import type { Log } from 'types/Log';
import type { Action } from 'types/Action';

export default (type: string, payload: Log): Action => ({
  type,
  payload,
});
