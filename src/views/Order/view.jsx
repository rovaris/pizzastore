import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'muicss/react';
import { PizzaForm, PizzaCart, actions } from 'components';
import OrderActions from './actions';

const { PizzaCartActions } = actions;

class OrderView extends Component {

    componentWillMount() {
        const { view } = this.props.actions;
        view.fetchMenu();
    }

    handleFormSubmission = (pizza) => {
        const { cart } = this.props.actions;
        cart.addPizza(pizza);
    }

    render() {
        const { isLoading, error, menu } = this.props.reducer;

        if (isLoading) {
            return (
                <Row>
                    <span className="mui--text-center"> Loading.. </span>
                </Row>
            );
        }

        if (error) {
            return (
                <Row>
                    <h2>An unexpected error has ocourred please contact support.</h2>
                    <h2> Error: {error}</h2>
                </Row>
            )
        }

        if (menu.length <= 0) {
            return (
                <Row>
                    <span className="mui--text-center"> Unfortunately there's no pizza available </span>
                </Row>
            );
        }
 
        return (
            <Row>
                <Col md="8">
                    <h1>Order</h1>
                    <PizzaForm
                        menu={ menu }
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
    actions: {
        cart: bindActionCreators(PizzaCartActions, dispatch),
        view: bindActionCreators(OrderActions, dispatch),
    }
});

const mapStateToProps = ({ OrderViewReducer }) => ({
    reducer: OrderViewReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderView);
