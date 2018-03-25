// @flow
import LogTypes from 'types/LogTypes';
import { type Log } from 'types/Log';
import { Action } from 'types/Action';

const ADD_LOG: string = 'ADD_LOG';
const addLog: Function = (msg: string): Action<Log> => ({
  type: ADD_LOG,
  payload: {
    msg,
    type: LogTypes.ERROR,
  },
});

const POP_LOG:string = 'POP_LOG';
const popLog:Function = (): Action<Log> => ({
  type: POP_LOG,
});

export default ({
  POP_LOG,
  popLog,
  ADD_LOG,
  addLog,
});
