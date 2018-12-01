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
        const hex = '#'+Math.floor(Math.random()*16777215).toString(16);
        return hex;
    }

    render() {
        return (
            <div className="random-color-card flex-column">
                <div className="random-color-card-color" style={{backgroundColor: this.state.hex}}></div>
                <div className="random-color-card-hex">{this.state.hex}</div>
            </div>
        );
    }
}

class RandomColorSet extends Component {
    constructor(props) {
        super(props);
        console.log("generating new set")

        const key = this.props.id * 6;
        const colorSet = [key, key+1, key+2, key+3, key+4, key+5].map((i) => {return <RandomColorCard key={i}/>})
        this.state = {
            set: colorSet,
            isHidden: false, //this doesnt do anything yet
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
