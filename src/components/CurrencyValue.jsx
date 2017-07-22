// @flow
import React, { Component } from 'react';
import numeral from 'numeral';

class CurrencyValue extends Component {

    static defaultProps = {
        currencyFormat: '$0.00',
        isCents: false,
    };

    static format = (number, isCents = false, numberFormat = null) => {

        const currencyFormat = numberFormat ?
            numberFormat :
            CurrencyValue.defaultProps.currencyFormat;

        return ( isCents ?
            numeral(number/100).format(currencyFormat) :
            numeral(number).format(currencyFormat)
        );
    };

    props: {
        value: number,
        isCents?: boolean,
        currencyFormat?: string,
        className?: string,
    };

    render() {
        const { value, isCents, currencyFormat, className } = this.props;

        return (
            <span className={ className }>{CurrencyValue.format(value, isCents, currencyFormat)}</span>
        );
    }
}

export default CurrencyValue;
