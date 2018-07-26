import {shallow} from 'enzyme'
import React from 'react'
import sinon from 'sinon'
import PokemonList from '../../../src/components/PokemonList/PokemonList'
import PokemonListItem from '../../../src/components/PokemonListItem/PokemonListItem'

test('should render PokemonListItem', async () => {

    let stub = await sinon.stub(PokemonList.prototype, 'getPokemonByType').returns([
        <PokemonListItem key='123' pokemon={{pokemon: {name:'missingno'}}}/>
    ]);
    
    const wrapper = shallow(<PokemonList/>)
    console.log(wrapper.html())
    expect(wrapper.find('PokemonListItem')).toHaveLength(1);

    stub.restore();
})