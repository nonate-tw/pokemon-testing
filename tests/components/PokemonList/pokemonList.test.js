import {shallow} from 'enzyme'
import React from 'react'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import PokemonList from '../../../src/components/PokemonList/PokemonList'

test('should call getPokemonByType method', async() => {
    var mock = new MockAdapter(axios);
    //const data = {data: {pokemon: [{pokemon: {name: 'charmander'}}]}}
    const data = {name: 'fire'}

    mock.onGet('https://pokeapi.co/api/v2/type/10').reply(200, data);

    const wrapper = shallow(<PokemonList/>)

    wrapper.instance().getPokemonByType(10).then(response => {
        expect(response).toContain(data);
        done();
    });
});