import React, {Component} from 'react'
import TypeList from '../../components/TypeList/TypeList'
import PokemonList from '../../components/PokemonList/PokemonList'

export default class App extends Component{

    constructor(props){
        super(props)

        this.state = {selectedType: null};
        this.onSelectedType = this.onSelectedType.bind(this);
    }

    onSelectedType(type){
        this.setState({selectedType: type});
    }

    render(){
        return(
            <div>
                <TypeList selectedType={this.onSelectedType}/>
                <PokemonList selectedTypeId={this.state.selectedType}/>
            </div>
        );
    }
}

