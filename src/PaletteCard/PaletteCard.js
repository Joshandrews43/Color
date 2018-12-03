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
        if(props.hasOwnProperty('colors') && props.colors.length > 0) {
            return props.colors;
        }

        for (let i = 0; i < 4; i++) {
            colors.push('#FFFFFF');
        }
        return colors;
    }

    componentWillReceiveProps(nextProps) {
        if (typeof nextProps.colors[3] == 'undefined') {
            for(let i = 0; i < 4; i++) {
                if(typeof nextProps.colors[i] == 'undefined') {
                    nextProps.colors[i] = "#FFFFFF";
                }
            }
        }
        this.setState({colors: nextProps.colors});
    }

    render() {
        return (
            <div className="flex-column palette-card">
                <ColorPalette onClick={this.props.onClick} colors={this.state.colors}/>
                <div className="palette-buttons">Bottom section</div>
            </div>
        );
    }
}

export default PaletteCard;
