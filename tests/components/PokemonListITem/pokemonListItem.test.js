import {shallow} from 'enzyme'
import React from 'react'
import sinon from 'sinon'
import axios from 'axios'
import PokemonListItem from '../../../src/components/PokemonListItem/PokemonListItem'

test('should have an "li" element', () => {
    const baseProps = {
        pokemon: jest.fn(),
    };
    
    const wrapper = shallow(<PokemonListItem {... baseProps}/>)
    expect(wrapper.find('li')).toHaveLength(1);
});

/*test('should call a method on click', () => {
    const baseProps = {
        pokemon: jest.fn(),
    };

    const method = jest.spyOn(PokemonListItem.prototype, 'setFavorite');
    let wrapper = shallow(<PokemonListItem {... baseProps}/>)

    const link = wrapper.find('a');

    link.simulate('click');

    expect(method.mock.calls.length).toBe(1);
});*/