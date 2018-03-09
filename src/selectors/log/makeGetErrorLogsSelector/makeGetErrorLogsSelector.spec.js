// @flow

import {
  list,
  first,
} from 'mori';
import type { Log } from 'types/Log';
import LogTypes from 'types/LogTypes';
import makeGetErrorLogsSelector from './makeGetErrorLogsSelector';

describe('Selector makeGetErrorLogsSelector', () => {
  test('gets all error logs', () => {
    const errorLog: Log = {
      type: LogTypes.ERROR,
      msg: 'My error message',
    };

    const warningLog: Log = {
      type: LogTypes.WARNING,
      msg: 'My warning message',
    };

    const state: { log: list } = {
      log: list(
        errorLog,
        warningLog,
      ),
    };
    const selector: Function = makeGetErrorLogsSelector();
    const expected: Log = errorLog;

    const actual: Log = first(selector(state));

    expect(actual).toBe(expected);
  });
});
