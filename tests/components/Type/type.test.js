import {shallow} from 'enzyme'
import React from 'react'
import Type from '../../../src/components/Type/Type'

test('should have an "li" element', () => {
    const wrapper = shallow(<Type/>)
    expect(wrapper.find('li')).toHaveLength(1);
});

test('should call a method on click', () => {

    const baseProps = {
        typeSelected: jest.fn(),
      };

    const method = jest.spyOn(Type.prototype, 'onClick');
    let wrapper = shallow(<Type {... baseProps}/>)

    const link = wrapper.find('a');

    link.simulate('click');

    expect(method.mock.calls.length).toBe(1);
});