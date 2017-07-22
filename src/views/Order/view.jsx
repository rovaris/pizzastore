import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'muicss/react';
import { PizzaForm, PizzaCart, actions } from 'components';

const { PizzaCartActions } = actions;
/*eslint-disable */
const TODAY_SPECIALS = [
    { price: 8.00, label: 'Small' , toppings: [
        { price: 0.4, name: 'pepperoni', defaultSelected: false },
        { price: 0.89, name: 'bannana peps', defaultSelected: false },
        { price: 1.29, name: 'sausage', defaultSelected: false },
        { price: 0.29, name: 'onion', defaultSelected: false },
        { price: 0.39, name: 'green olives', defaultSelected: false },
        { price: 0.1, name: 'cheese', defaultSelected: true },
        { price: 0.22, name: 'bell peps', defaultSelected: false },
    ], maxToppings: 3 },

    { price: 10.00, label: 'Medium' , toppings: [
        { price: 0.4, name: 'pepperoni', defaultSelected: true },
        { price: 0.89, name: 'bannana peps', defaultSelected: false },
        { price: 1.29, name: 'sausage', defaultSelected: false },
        { price: 0.29, name: 'onion', defaultSelected: false },
        { price: 0.39, name: 'green olives', defaultSelected: false },
        { price: 0.1, name: 'cheese', defaultSelected: true },
        { price: 0.22, name: 'bell peps', defaultSelected: false },
    ], maxToppings: 5 },

    { price: 12.00, label: 'Large' , toppings: [
        { price: 0.4, name: 'pepperoni', defaultSelected: false },
        { price: 0.89, name: 'bannana peps', defaultSelected: false },
        { price: 1.29, name: 'sausage', defaultSelected: true },
        { price: 0.29, name: 'onion', defaultSelected: true },
        { price: 0.39, name: 'green olives', defaultSelected: false },
        { price: 0.1, name: 'cheese', defaultSelected: true },
        { price: 0.22, name: 'bell peps', defaultSelected: false },
    ], maxToppings: 5 },
    { price: 18.00, label: 'Extra Gigantic' , toppings: [
        { price: 0.4, name: 'pepperoni', defaultSelected: false },
        { price: 0.89, name: 'bannana peps', defaultSelected: true },
        { price: 1.29, name: 'sausage', defaultSelected: false },
        { price: 0.29, name: 'onion', defaultSelected: false },
        { price: 0.39, name: 'green olives', defaultSelected: false },
        { price: 0.1, name: 'cheese', defaultSelected: false },
        { price: 0.22, name: 'bell peps', defaultSelected: false },
    ],
    maxToppings: null },
];
/*eslint-enable */

class OrderView extends Component {

    handleFormSubmission = (pizza) => {
        const { cart } = this.props;
        cart.addPizza(pizza);
    }

    render() {
        return (
            <Row>
                <Col md="8">
                    <h1>Order</h1>
                    <PizzaForm
                        menu={ TODAY_SPECIALS }
                        onSubmit={ this.handleFormSubmission }
                    />
                </Col>
                <Col md="4">
                    <h1>Cart</h1>
                    <PizzaCart />
                </Col>
            </Row>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    cart: bindActionCreators(PizzaCartActions, dispatch),
});

export default connect(null, mapDispatchToProps)(OrderView);
