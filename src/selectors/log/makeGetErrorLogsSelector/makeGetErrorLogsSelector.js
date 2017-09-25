// @flow

import { createSelector } from 'reselect';
import { list, filter } from 'mori';
import LogTypes from 'types/LogTypes';

const getLogs: (state: { log: list }) => list = state => state.log;

const getErrorLogsSelector = () => createSelector(
  getLogs,
  logs => filter(log => log.type === LogTypes.ERROR, logs));

export default getErrorLogsSelector;
