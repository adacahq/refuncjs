// @flow
import LogTypes from 'types/LogTypes';
import { Action } from 'types/Action';
import {
  LogFactory,
  LogActionFactory,
} from 'factories';

const ADD_LOG = 'ADD_LOG';
const addLog = (msg: string): Action => LogActionFactory(ADD_LOG,
  LogFactory({
    msg,
    type: LogTypes.ERROR,
  }),
);

const POP_LOG = 'POP_LOG';
const popLog = (): Action => LogActionFactory(
  POP_LOG,
  LogFactory({ msg: '' }),
);

export default ({
  POP_LOG,
  popLog,
  ADD_LOG,
  addLog,
});
