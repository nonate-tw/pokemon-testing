import React, {Component} from 'react';
import axios from 'axios';

export default class PokemonListItem extends Component{

    constructor(props){
        super(props)

        this.setFavorite = this.setFavorite.bind(this)
    }

    setFavorite(){
        axios.post('localhost:8080/pokemons', {"url": "url4", "name": this.props.pokemon.name}).then(
            res => {
                console.log('you has been set this pokemon as favorite!');
            }
        )
    }

    render(){
        return (
            <li>
                <div style={{margin: '3px'}}>
                    {this.props.pokemon.name}
                    <a onClick={this.setFavorite} href="#"> favorite</a>
                </div> 
                <div>
                    
                </div>
            </li>
        )
    }
}