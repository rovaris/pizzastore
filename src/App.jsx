import React from 'react';
import { Appbar, Container } from 'muicss/react';
import { OrderView } from './views';

const App = () => (
    <div>
        <Appbar />
        <Container>
            <OrderView />
        </Container>
    </div>
);

export default App;
