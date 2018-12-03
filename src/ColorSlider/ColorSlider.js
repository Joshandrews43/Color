import React, {Component} from 'react';
import './ColorSlider.css';

class ColorSlider extends Component {

    render() {
        return (
            <div className="picker">
                <input
                    id={this.props.color + "-slider"}
                    type="range"
                    min="0"
                    max="255"
                    step="1"
                    defaultValue="0"
                    onInput={this.props.onInput}
                />

                <label className="color-name">{this.props.color + ": " + this.props.value}</label>
            </div>
        );
    }
}


export default ColorSlider;
