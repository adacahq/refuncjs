// @flow

import type { Element } from 'react';
import { RouterLocation } from 'types/RouterLocation';
import { NOT_FOUND } from 'redux-first-router';

export type RouterProps = {
  location: RouterLocation,
  components: {
    [NOT_FOUND]: () => Element<*>
  },
};
