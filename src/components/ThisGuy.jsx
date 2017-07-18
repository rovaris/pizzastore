import React, { Component } from 'react';
import { AsciiImage } from 'react-ascii-image';

const imgSmall = '/thisguy200x200.jpg';
const imgMedium = '/thisguy400x400.jpg';

/*
* Please note that AsciiImage is a component that raises warnings,
* but its working, when i get the chance ill take a look and make a PR
*/

class ThisGuy extends Component {

    state = {
        isSmall: false,
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { isSmall } = this.state;
        return nextState.isSmall !== isSmall;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const isSmall = width < 400 || height < 400;

        this.setState({ isSmall });
    }

    render() {
        const { isSmall } = this.state;

        if (isSmall) {
            return (<AsciiImage url={ imgSmall } />);
        }

        return (<AsciiImage url={ imgMedium } />);
    }

}

export default ThisGuy;
