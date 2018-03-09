// @flow

import React from 'react';
import type { Element } from 'react';
import { NOT_FOUND } from 'redux-first-router';
import type { RouterProps } from './Router.props';

const Router: Function = (props: RouterProps): Element<*> => (
  <main>
    {(props.components[props.location.type] || props.components[NOT_FOUND])()}
  </main>
);

export default Router;
