// @flow

import { fork } from 'redux-saga/effects';

const sagas: [] = [];

export default function* root(): * {
  yield sagas.map(saga => fork(saga));
}
