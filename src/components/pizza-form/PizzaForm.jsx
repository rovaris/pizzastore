//  @flow
import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel, Row, Col, Checkbox, Dropdown, DropdownItem, Button } from 'muicss/react';
import CurrencyValue from 'components/CurrencyValue';
import type { Pizza, Topping } from 'helpers/types';
import PizzaFormActions from './actions';


class PizzaForm extends Component {

    props: {
        menu: Array<Pizza>,
        onSubmit: () => void,
    };

    handleSelectedPizza = (pizza: Pizza) => {
        const { actions } = this.props;
        actions.selectPizza(pizza);
    }

    handleToggleTopping = (topping: Topping) => () => {
        const { actions } = this.props;
        topping.selected = !topping.selected;
        actions.selectTopping(topping);
    }

    handleSubmission = () => {
        const { actions, onSubmit } = this.props;
        const { name, basePrice, toppings } = this.props.reducer;

        const selectedToppings = toppings.filter(entry => entry.selected === true);

        const order = {
            name,
            basePrice,
            toppings: selectedToppings,
        };

        onSubmit(order);
        actions.resetForm();
    }

    render() {
        const { menu } = this.props;
        const { name, basePrice, toppings } = this.props.reducer;

        return (
            <Panel>
                <h2>Your Pizza</h2>
                <Dropdown color="primary" label="Select Size">
                    { menu.map(entry =>
                        (
                            <DropdownItem
                                onClick={ () => this.handleSelectedPizza(entry) }
                                key={ uniqueId('opt') }
                            >
                                { entry.name }
                            </DropdownItem>
                        ))
                    }
                </Dropdown>
                {
                    name && (
                        <div>
                            <h4 >Size: { name } </h4>
                            <h4>Price: <CurrencyValue value={ basePrice } /></h4>
                            <Row>
                                <Col md={ 12 }>
                                    {
                                        toppings.map(topping => (
                                            <div key={ uniqueId('topping') }>
                                                <Checkbox
                                                    name={ topping.name }
                                                    checked={ topping.selected }
                                                    onChange={ this.handleToggleTopping(topping) }
                                                    label={ `${topping.name} ${CurrencyValue.format(topping.price)}` }
                                                />
                                            </div>
                                        ))
                                    }
                                </Col>
                            </Row>
                            <Button
                                variant="raised"
                                color="primary"
                                className="mui--pull-right"
                                onClick={ this.handleSubmission }
                            >
                                Add to Cart
                            </Button>
                        </div>
                    )
                }
            </Panel>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(PizzaFormActions, dispatch),
});

const mapStateToProps = ({ PizzaFormReducer }) => ({
    reducer: PizzaFormReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaForm);
