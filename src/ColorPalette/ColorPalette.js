import React, {Component} from 'react';
import './ColorPalette.css';

const ColorPalette = (props) => {
    return(
        props.colors.map(color => {
            return <div className="palette-color" onClick={props.onClick}
                        style={{backgroundColor: color}}>
                        <label className="color-pallete-hex-label" style={{backgroundColor: color}}>{color}</label>
                    </div>
        })
    );
}

export default ColorPalette;
