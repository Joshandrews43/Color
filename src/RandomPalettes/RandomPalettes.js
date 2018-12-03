import React, {Component} from 'react';
import './RandomPalettes.css';
import PaletteCard from '../PaletteCard/PaletteCard.js';

class RandomPalettes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            palettes: [],
        };
    }

    componentDidMount() {
        this.generateRandomPalettes();
    }

    generateRandomHex() {
        return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    }

    generateRandomPalettes() {
        let newPalettes = [];
        for (let i = 0; i < 24; i++) {
            const paletteColors = [];
            for (let j = 0; j < 4; j++) {
                paletteColors.push(this.generateRandomHex());
            }
            newPalettes.push(<PaletteCard onClick={this.props.onClick} colors={paletteColors} />);
        }
        newPalettes = this.state.palettes.concat(newPalettes);
        this.setState({palettes: newPalettes})
    }

    render() {
        return(
            <>
                <div className="flex-column" id="random-palettes-container">
                    <h3 className="header">Random Color Palettes</h3>
                    <div className="flex-row" id="random-palettes">{this.state.palettes}</div>
                </div>
            </>
        );
    }
}

export default RandomPalettes;
