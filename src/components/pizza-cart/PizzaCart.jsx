import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel, Divider, Row, Col } from 'muicss/react';
import { CurrencyValue } from 'components';
import Actions from './actions';

class PizzaCart extends Component {

    removePizzaFromCart = pizzaToBeRemoved => () => {
        const { actions } = this.props;
        actions.removePizza(pizzaToBeRemoved);
    }

    render() {
        const { pizzas, total } = this.props.reducer;

        const hasPizzas = pizzas.length > 0;

        if (!hasPizzas) {
            return (
                <Panel>
                    <h5>Empty Cart</h5>
                </Panel>
            );
        }

        return (
            <Panel>
                {
                    pizzas.map(pizza => (
                        <div key={ uniqueId('pizza') }>
                            <span title="remove" className="icon fa fa-trash-o" onClick={ this.removePizzaFromCart(pizza) } />
                            <span>{ pizza.label }</span>
                            <CurrencyValue value={ pizza.price } className="mui--pull-right" />
                            <ul>
                                {
                                    pizza.toppings.map(topping => (
                                        <li key={ uniqueId('topping') }>
                                            { topping.name}
                                            <CurrencyValue value={ topping.price } className="mui--pull-right" />
                                        </li>
                                    ))
                                }
                            </ul>
                            <span>Price: </span>
                            <CurrencyValue value={ pizza.total } className="mui--pull-right" />
                            <br />
                            <br />
                        </div>
                    ))
                }
                <Divider />
                <Row>
                    <Col md={ 6 }>
                        <strong><h3>Total:</h3></strong>
                    </Col>
                    <Col md={ 6 }>
                        <strong>
                            <h3 className="mui--pull-right">
                                { CurrencyValue.format(total) }
                            </h3>
                        </strong>
                    </Col>
                </Row>
            </Panel>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
});

const mapStateToProps = ({ PizzaCartReducer }) => ({
    reducer: PizzaCartReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCart);
