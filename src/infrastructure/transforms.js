// @flow

import { createTransform } from 'redux-persist';

export default createTransform(
  (
    reducerState: Object,
    reducerName: string,
  ): Object => {
    switch (reducerName) {
      default:
        return reducerState;
    }
  },

  (
    reducerState: Object,
    reducerName: string,
  ): Object => {
    switch (reducerName) {
      default:
        return reducerState;
    }
  },
);
