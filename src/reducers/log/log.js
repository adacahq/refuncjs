// @flow

import {
  list,
  conj,
  rest,
} from 'mori';
import logs from 'actions';
import { Action } from 'types/Action';

import {
  LogFactory,
  LogActionFactory,
} from 'factories';

const DEFAULT_STATE = list();

export default (state: list = DEFAULT_STATE,
  action: Action = LogActionFactory('', LogFactory({ msg: '' }))): list => {
  switch (action.type) {
    case `${logs.POP_LOG}`:
      return rest(state);

    case `${logs.ADD_LOG}`:
      return conj(state, LogFactory(action.payload));

    default:
      return state;
  }
};
