// @flow

import logs from 'actions';
import { Action } from 'types/Action';
import {
  count,
  first,
  list,
} from 'mori';
import LogReducer from './log';

describe('Log reducer', () => {
  test('Add log', () => {
    const action: Action = logs.addLog('test');

    const nextState: list = LogReducer(undefined, action);

    expect(count(nextState)).toBe(1);
  });

  test('log content', () => {
    const expected: string = 'test';
    const action: Action = logs.addLog('test');

    const nextState: list = LogReducer(undefined, action);
    const actual: string = first(nextState).msg;

    expect(expected).toBe(actual);
  });

  test('pop log', () => {
    const addAction: Action = logs.addLog('test');

    const nextState: list = LogReducer(undefined, addAction);

    expect(count(nextState)).toBe(1);

    const popAction: Action = logs.popLog();

    const finalState: list = LogReducer(nextState, popAction);

    expect(count(finalState)).toBe(0);
  });
});
