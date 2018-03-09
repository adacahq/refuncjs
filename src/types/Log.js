// @flow

type LogType = 'ERROR' | 'WARNING';

export type Log = {
    type: LogType,
    msg: string,
};
