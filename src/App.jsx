import React, { Component } from 'react';
import { Appbar, Container } from 'muicss/react';
import { OrderView } from './views';

class App extends Component {
    render() {
        return (
            <div>
                <Appbar />
                <Container>
                    <OrderView />
                </Container>
          </div>
        );
    }
}

export default App;
