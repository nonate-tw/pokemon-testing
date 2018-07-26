import React, {Component} from 'react';

export default class Type extends Component {

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.props.typeSelected(this.props.type);
    }

    render() {
        return  (
            <li>
                <a href="#" onClick={this.onClick}>Fuego</a>
            </li>
        )
    }
}