import {shallow} from 'enzyme'
import React from 'react'
import sinon from 'sinon'
import PokemonListItem from '../../../src/components/PokemonListItem/PokemonListItem'

test('should have an "li" element', () => {
    const baseProps = {
        pokemon: jest.fn(),
    };
    
    const wrapper = shallow(<PokemonListItem {... baseProps}/>)
    expect(wrapper.find('li')).toHaveLength(1);
});

test('should call a method on click', () => {

    const method = jest.spyOn(PokemonListItem.prototype, 'onClick');
    let wrapper = shallow(<PokemonListItem/>)

    const link = wrapper.find('a');

    link.simulate('click');

    expect(method.mock.calls.length).toBe(1);
});