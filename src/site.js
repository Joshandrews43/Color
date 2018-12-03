import React, {Component} from 'react';
import PickAColor from './PickAColor/PickAColor.js'
import RandomColors from './RandomColors/RandomColors.js'
import RandomPalettes from './RandomPalettes/RandomPalettes.js'

class Site extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);

        this.state = {
            myColors: [],
        };
    }

    onClick(e) {
        const clickedColor = e.target.style['background-color'];
        let myColors = this.state.myColors;

        if (typeof myColors[3] == 'undefined') {
            myColors.push(clickedColor);
        } else {
            myColors.pop();
            myColors.splice(0, 0, clickedColor);
        }

        this.setState({myColors: myColors});
    }

    render() {
        return (
            <>
                <PickAColor onClick={this.onClick} myColors={this.state.myColors}/>
                <RandomColors onClick={this.onClick}/>
                <RandomPalettes onClick={this.onClick}/>
            </>

            //<top part with color sliders, choose your own color>
            //middle part with just a bunch of random colors that you can heart
            //favorites tab at bottom
        );
    }
}

export default Site;
