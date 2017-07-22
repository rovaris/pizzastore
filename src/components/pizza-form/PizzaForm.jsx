//@flow
import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel, Form, Row, Col, Checkbox, Button } from 'muicss/react';
import { Dropdown, DropdownItem } from 'muicss/react';
import PizzaFormActions from './actions';
import CurrencyValue from 'components/CurrencyValue';

class PizzaForm extends Component {
    
    props: {
        menu: Object,
        onSubmit: Function,
    };

    constructor(props) {
        super(props);
    }

    handleSelectedPizza = (pizza) => {
       const { actions } = this.props;
       actions.selectPizza(pizza);
    }

    handleToggleTopping = (topping) => {
        const { actions } = this.props;
        topping.selected = !topping.selected;
        actions.selectTopping(topping);
    }

    handleSubmission = () => {
        const { actions, onSubmit } = this.props;
        const { label, price, toppings } = this.props.reducer;

        const selectedToppings = toppings.filter(entry => entry.selected === true);

        const order = {
            label,
            price,
            toppings: selectedToppings,
        }

        onSubmit(order);
        actions.resetForm();
    }

    render() {
        const { menu } = this.props;
        const { label, price, toppings } = this.props.reducer;

        return (
            <Panel>
                <h2>Your Pizza</h2>
                <Dropdown color="primary" label="Select Size">
                    { menu.map( entry => {
                        return (
                            <DropdownItem
                                onClick={ () => this.handleSelectedPizza(entry) }
                                key={ uniqueId('opt') }
                            >
                                { entry.label }
                            </DropdownItem>
                        );
                    })}
                </Dropdown>
                {
                    label && (
                        <div>
                            <h4 >Size: { label } </h4>
                            <h4>Price: <CurrencyValue value={ price } /></h4>
                            <Row>
                                <Col md={ 12 }>
                                {
                                    toppings.map(topping => (
                                            <div key={ uniqueId('topping') }>
                                                <Checkbox
                                                    name={ topping.name }
                                                    checked={ topping.selected }
                                                    onChange={ () => this.handleToggleTopping(topping) }
                                                    label={ `${topping.name} ${ CurrencyValue.format(topping.price) }` }
                                                />
                                            </div>
                                        )
                                    )
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
