import React, { Component } from 'react';
import RandomColorSet from '../RandomColorCard/RandomColorCard.js';
import "./RandomColors.css";


const leftArrow = require('../assets/left_arrow.png');
const rightArrow = require('../assets/right_arrow.png');



class RandomColors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSet: 500,
            currentColors: [],
            minSet: 500,
            maxSet: 500,
        };
    }

    componentDidMount() {
        this.onNextSet()
    }

    renderRandomColors() {
        return this.state.currentColors.map((set, index) => {
            const className = set.props.id === this.state.currentSet ? "active" : "hidden";
            const newSet = React.cloneElement(set, {classNames: className});
            return newSet;
        })
    }

    onNextSet() {
        if(this.state.currentSet === this.state.maxSet) {
            const newArray = this.state.currentColors.concat(
                [<RandomColorSet key={this.state.currentSet + 1}
                                 id={this.state.currentSet + 1}
                                 classNames="active"
                                 />
                ]);
            this.setState({
                currentColors: newArray,
                maxSet: this.state.maxSet + 1,
            });
        }

        this.setState({
            currentSet: this.state.currentSet + 1,
        });
    }

    onPreviousSet() {
        if(this.state.currentSet === this.state.minSet + 1) {
            const newArray = [<RandomColorSet key={this.state.currentSet - 1}
                             id={this.state.currentSet - 1}
                             classNames="active"
                             />
                        ].concat(this.state.currentColors);
            this.setState({
                currentColors: newArray,
                minSet: this.state.minSet - 1,
            });
        }


        this.setState({
            currentSet: this.state.currentSet - 1,
        });
    }

    render() {
        return (
            <>
                <div className="header">Random Colors</div>
                <div className="random-colors-container flex-row">
                    <img src={leftArrow} alt="left arrow" className="arrow clickable"
                        onClick={this.onPreviousSet.bind(this)}
                        style={{display: this.state.currentSet > 0 ? 'block' : 'none'}}/>
                    <div id="random-colors" className="flex-row">
                        {this.renderRandomColors()}
                    </div>
                    <img src={rightArrow} alt="right arrow" className="arrow clickable" onClick={this.onNextSet.bind(this)}/>
                </div>
            </>
        );
    }
}

export default RandomColors;
