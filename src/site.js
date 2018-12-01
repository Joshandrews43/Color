import React, {Component} from 'react';
import PickAColor from './PickAColor/PickAColor.js'
import RandomColors from './RandomColors/RandomColors.js'

class Site extends Component {
    render() {
        return (
            <>
                <PickAColor/>
                <RandomColors />
            </>

            //<top part with color sliders, choose your own color>
            //middle part with just a bunch of random colors that you can heart
            //favorites tab at bottom
        );
    }
}

export default Site;
