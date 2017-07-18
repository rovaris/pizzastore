// @flow
import React, { Component } from 'react';
import numeral from 'numeral';

class CurrencyValue extends Component {
    static defaultProps = {
        currencyFormat: '$0.00',
        isCents: false,
    };

    props: {
        value: number,
        isCents?: boolean,
        currencyFormat?: string,
    };

    render() {
        const { value, isCents, currencyFormat } = this.props;

        if (isCents) {
            return (<span> {numeral(value / 100).format(currencyFormat)}</span>);
        }

        return (<span> {numeral(value).format(currencyFormat)}</span>);
    }
}

export default CurrencyValue;
