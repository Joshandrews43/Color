import React, {Component} from 'react';
import ColorSlider from '../ColorSlider/ColorSlider.js';
import './PickAColor.css';
import PaletteCard from '../PaletteCard/PaletteCard.js';

class PickAColor extends Component {

    constructor(props) {
        super(props);

        this.updateRed = this.updateRed.bind(this);
        this.updateGreen = this.updateGreen.bind(this);
        this.updateBlue = this.updateBlue.bind(this);
        this.getHex = this.getHex.bind(this);

        this.state = {
            red: 0,
            blue: 0,
            green: 0,
        };
    }

    updateRed(event) {
        this.setState({red: event.target.value});
    }

    updateGreen(event) {
        this.setState({green: event.target.value});
    }

    updateBlue(event) {
        this.setState({blue: event.target.value});
    }

    getHex() {
        let vals = [this.state.red, this.state.green, this.state.blue];
        return vals.map(val => {
            let hex = Number(val).toString(16).toUpperCase();
            return hex.length === 1 ? "0" + hex : hex;
        }).join('')
    };

    render() {
        return (
            <div className="top flex-row">
                <div className="left flex-row">
                    <div className="sliders flex-column">
                        <ColorSlider
                            color={"red"}
                            value={this.state.red}
                            onInput={this.updateRed}/>
                        <ColorSlider
                            color={"green"}
                            value={this.state.green}
                            onInput={this.updateGreen}/>
                        <ColorSlider
                            color={"blue"}
                            value={this.state.blue}
                            onInput={this.updateBlue}/>
                    </div>
                    <div id="color-block" style={{backgroundColor: "#" + this.getHex()}} onClick={this.props.onClick}>
                        <div id="hex-display" style={{backgroundColor: "#" + this.getHex()}}>
                            {"#" + this.getHex()}
                        </div>
                    </div>
                </div>
                <PaletteCard id="my-pallete" colors={this.props.myColors}/>
            </div>
        );
    }
}

export default PickAColor;
