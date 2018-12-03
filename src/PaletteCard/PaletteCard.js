import React, {Component} from 'react';
import "./PaletteCard.css";
import ColorPalette from '../ColorPalette/ColorPalette.js';



class PaletteCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: this.initializeColors(props),
        }
    }

    initializeColors(props) {
        let colors = [];

        if(props.hasOwnProperty('colors')) {
            return props.colors;
        }

        for (let i = 0; i < 4; i++) {
            colors.push('#FFFFFF');
        }
        return colors;
    }

    render() {
        return (
            <div className="flex-column palette-card">
                <ColorPalette colors={this.state.colors}/>
                <div className="palette-buttons">Bottom section</div>
            </div>
        );
    }
}

export default PaletteCard;
