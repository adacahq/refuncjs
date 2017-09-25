// @flow
import type { Log } from 'types/Log';
import LogTypes from 'types/LogTypes';

export default (message: { msg: string } = { msg: '' }): Log => Object.freeze({
  msg: message.msg,
  type: LogTypes.ERROR,
});
