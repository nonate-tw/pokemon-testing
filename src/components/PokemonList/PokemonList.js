import React, {Component} from 'react'
import PokemonListItem from '../PokemonListItem/PokemonListItem'
import axios from 'axios';


const URL= 'https://pokeapi.co/api/v2/type/';

export default class PokemonList extends Component{

    constructor(props){
        super(props)

        this.state = {pokemonList: [], items: []};
    }

    getPokemonByType(typeId) {
        return axios.get(`${URL}${typeId}`).then(res => {
            this.setState({pokemonList: res.data.pokemon});

            this.setState({items: this.state.pokemonList.map((item) => {
                return (
                    <PokemonListItem key={item.pokemon.name} pokemon={item.pokemon}/>
                )
            })})
        })
    }

    render(){ 
        if (this.props.selectedTypeId != null && this.state.pokemonList.length === 0){
            this.getPokemonByType(this.props.selectedTypeId.id);
        }
        
        return (
            <div>
                <ul>
                    {this.state.items}
                </ul>    
            </div>    
        )
    }
}