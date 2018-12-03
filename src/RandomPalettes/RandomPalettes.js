import React, {Component} from 'react';
import './RandomPalettes.css';
import PaletteCard from '../PaletteCard/PaletteCard.js';

class RandomPalettes extends Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
            palettes: [],
        };
    }

    componentDidMount() {
        this.generateRandomPalettes();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    generateRandomHex() {
        return "#000000".replace(/0/g,() => (~~(Math.random()*16)).toString(16));
    }

    makePalette(num) {
        const paletteColors = [];
        for (let j = 0; j < 4; j++) {
            paletteColors.push(this.generateRandomHex());
        }
        return (
            <PaletteCard
                onClick={this.props.onClick}
                colors={paletteColors}
                key={this.state.palettes.length + num}
            />
        );
    }

    generateRandomPalettes() {
        let newPalettes = [];
        for (let i = 0; i < 8; i++) {
            newPalettes.push(this.makePalette(i));
        }
        newPalettes = this.state.palettes.concat(newPalettes);
        this.setState({palettes: newPalettes})
    }

    handleScroll(event) {
        if (window.pageYOffset + window.innerHeight > document.body.scrollHeight - 200) {
            this.generateRandomPalettes()
        }
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
