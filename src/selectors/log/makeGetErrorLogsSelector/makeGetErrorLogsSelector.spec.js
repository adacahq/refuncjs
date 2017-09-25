// @flow

import { list, first } from 'mori';
import LogTypes from 'types/LogTypes';
import type { Log } from 'types/Log';
import LogFactory from 'factories/LogFactory';
import makeGetErrorLogsSelector from './makeGetErrorLogsSelector';

describe('Selector makeGetErrorLogsSelector', () => {
  test('gets all error logs', () => {
    // Arrange
    const errorLog: Log = LogFactory({
      msg: 'My error message',
      type: LogTypes.ERROR,
    });

    const warningLog: Log = LogFactory({
      msg: 'My warning message',
      type: LogTypes.WARNING,
    });

    const state: { log: list } = {
      log: list(
        errorLog,
        warningLog,
      ),
    };
    const selector = makeGetErrorLogsSelector();
    const expected = errorLog;

    // Act
    const actual = first(selector(state));

    // Assert
    expect(actual).toBe(expected);
  });
});
