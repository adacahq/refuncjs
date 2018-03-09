// @flow

import { createSelector } from 'reselect';
import type { Selector } from 'reselect';
import { list, filter } from 'mori';
import LogTypes from 'types/LogTypes';
import typeof Log from 'types/Log';

const getLogs: (state: { log: list }) => list = (state: Object): list => state.log;

const getErrorLogsSelector: Function = (): Selector<Object, Object, list> => createSelector(
  getLogs,
  (logs: list): list => filter((log: Log): boolean => log.type === LogTypes.ERROR, logs));

export default getErrorLogsSelector;
