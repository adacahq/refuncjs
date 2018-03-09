// @flow

import {
  list,
  conj,
  rest,
} from 'mori';
import { logs } from 'actions';
import { Action } from 'types/Action';
import { type Log } from 'types/Log';
import LogTypes from 'types/LogTypes';

const DEFAULT_STATE: list = list();

const DEFAULT_ACTION: Object = {
  type: LogTypes.WARNING,
  payload: {
    type: '',
    msg: '',
  },
};

export default (state: list = DEFAULT_STATE, action: Action<Log> = DEFAULT_ACTION): list => {
  switch (action.type) {
    case `${logs.POP_LOG}`:
      return rest(state);

    case `${logs.ADD_LOG}`:
      return conj(state, action.payload);

    default:
      return state;
  }
};
