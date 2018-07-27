import React, {Component} from 'react';
import Type from  '../Type/Type';
import axios from 'axios';


const URL= 'http://localhost:8080/pokemon/types';
//const URL= 'https://pokeapi.co/api/v2/pokemon/18/';

export default class TypeList extends Component {

    constructor(props){
        super(props);

        this.state = {typeList: []};
        axios.get(`${URL}`).then(res => {
            console.log(res.data)
            this.setState({typeList: res.data});
        })

        this.onSelected = this.onSelected.bind(this);
    }

    onSelected(selected){
        console.log(selected);
        this.props.selectedType(selected)
    }

    render() {
        return (
            <ul>
                <Type type={{id:10}} typeSelected={this.onSelected}/>
            </ul>
        )
    }
}