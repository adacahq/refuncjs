// @flow

import React from 'react';
import { NOT_FOUND } from 'redux-first-router';
import {
  shallow,
  type ShallowWrapper,
} from 'enzyme';
import type { RouterLocation } from 'types/RouterLocation';
import Router from './Router.view';

describe('Router.spec', () => {
  const components: Object = {
    HOME: (): Element<'h1'> => <h1>Home</h1>,
    [NOT_FOUND]: (): Element<'h1'> => <h1>Not Found</h1>,
  };

  test('renders not found component', () => {
    const expected: string = 'Not Found';
    const location: RouterLocation = {
      type: 'FAKE',
      pathname: '',
      payload: {},
      prev: {},
      kind: '',
      routesMap: {},
    };

    const actual: string = shallow(
      <Router location={location} components={components} />,
    ).text();

    expect(actual).toBe(expected);
  });

  test('renders component for location', () => {
    const expected: string = 'Home';
    const location: RouterLocation = {
      type: 'HOME',
      pathname: '',
      payload: {},
      prev: {},
      kind: '',
      routesMap: {},
    };

    const actual: string = shallow(
      <Router location={location} components={components} />,
    ).text();

    expect(actual).toBe(expected);
  });
});
