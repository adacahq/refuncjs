// @flow

import type { Log } from 'types/Log';

export interface Action {
  type: string,
  payload: Log
}
