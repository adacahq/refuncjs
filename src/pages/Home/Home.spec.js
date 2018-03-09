// @flow

import React from 'react';
import {
  shallow,
  type ShallowWrapper,
} from 'enzyme';
import Home from './Home';

describe('Home.spec', () => {
  test('is home', () => {
    // Arrange
    const component: ShallowWrapper = shallow(<Home title={'Home'} />);

    // Act
    const actual: string = component.text();

    // Assert
    expect(actual).toBe('Home');
  });
});
