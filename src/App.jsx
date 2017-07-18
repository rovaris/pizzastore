import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { Appbar, Button, Panel, Container, Row } from 'muicss/react';
 
class Example extends React.Component {
    onClick() {
        console.log('clicked on button');
    }
  
    render() {
        return (
            <div>
                <Appbar />
                <Container>
                    <Row>
                        <h1> Place your order </h1>
                        <p> Lorem ipsum Blabalbalbalblalbalbal </p>
                        <br/>
                        <Panel>
                            <Button onClick={this.onClick}>My Button</Button>
                        </Panel>
                    </Row>
                </Container>
          </div>
        );
    }
}

export default Example;
