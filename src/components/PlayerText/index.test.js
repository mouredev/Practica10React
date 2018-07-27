import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PlayerText from '.';

describe('PlayerText', () => {
  const CHILD = '<styled.div />';
  const component = <PlayerText>{CHILD}</PlayerText>;
  test('it shallows', () => {
    const wrapper = shallow(component);
    expect(wrapper.text()).toBe(CHILD);
    expect(wrapper).toBeDefined();
  });
  test('snapshot', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
