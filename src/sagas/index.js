// @flow

import { fork } from 'redux-saga/effects';
import { type ForkEffect } from 'redux-saga';

const sagas: [] = [];

export default function* root(): * {
  yield sagas.map((saga: Generator<*, *, *>): ForkEffect<*, *, *> => fork(saga));
}
