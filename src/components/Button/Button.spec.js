// @flow

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from './Button';

describe('button.spec', () => {
  let onClickSpy;

  beforeEach(() => {
    onClickSpy = jest.fn();
  });

  test('buttons gets primary class modifier', () => {
    const actual = renderer.create(<Button
      text="my text"
      isPrimary={true}
      onClick={onClickSpy}
    />).toJSON();

    expect(actual).toHaveStyleRule('background-color', '#6200d0');
  });

  test('it should trigger my onClick fn', () => {
    const component = shallow(<Button text="text" onClick={onClickSpy} />);

    component.simulate('click');

    expect(onClickSpy.mock.calls.length).toBe(1);
  });
});
