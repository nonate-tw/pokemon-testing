import {shallow} from 'enzyme'
import React from 'react'
import App from '../../../src/components/App/App'

test('should render TypeList', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('TypeList')).toHaveLength(1);
});

test('should render PokemonList', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('PokemonList')).toHaveLength(1);
});