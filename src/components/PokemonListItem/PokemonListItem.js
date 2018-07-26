import React, {Component} from 'react';
import axios from 'axios';

export default class PokemonListItem extends Component{

    constructor(props){
        super(props)

        this.setFavorite = this.setFavorite.bind(this)
    }

    setFavorite(){
        console.log(`Has guardado a ${this.props.pokemon.name}`)
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