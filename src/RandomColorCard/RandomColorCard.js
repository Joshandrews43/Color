import React, { Component } from 'react'
import './RandomColorCard.css';

class RandomColorCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hex: this.generateRandomHex(),
        };
    }

    generateRandomHex() {
        return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    }

    render() {
        return (
            <div className="random-color-card flex-column">
                <div className="random-color-card-color" style={{backgroundColor: this.state.hex}}  onClick={this.props.onClick} ></div>
                <div className="random-color-card-hex">{this.state.hex}</div>
            </div>
        );
    }
}

class RandomColorSet extends Component {
    constructor(props) {
        super(props);

        const key = this.props.id * this.props.setSize;
        let colorSet = [];
        for (let i = key; i < key + this.props.setSize; i++) {
            colorSet.push(<RandomColorCard onClick={this.props.onClick} key={i}/>);
        }

        this.state = {
            set: colorSet,
        };
    }

    render() {
        return (
            <div className={"random-color-set flex-row " + this.props.classNames}>
                {this.state.set}
            </div>
        );
    }
}

export default RandomColorSet;
