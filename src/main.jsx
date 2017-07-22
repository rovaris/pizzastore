import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/main.scss';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import store from './store';

const DEFAULT_APP_ID = 'root';

function renderApp(RootComponent, store, id = DEFAULT_APP_ID, args = {}) {
    const target = window.document.getElementById(id);

    if (target) {
        ReactDOM.render(
            <AppContainer>
                <Provider store={ store }>
                    <RootComponent { ...args } />
                </Provider>
            </AppContainer>,
            target,
        );
    }
}

function onDomLoaded() {
    renderApp(App, store);

    if (module.hot) {
        module.hot.accept('./App', () => {
            const NextRootContainer = require('./App').default;
            renderApp(NextRootContainer);
        });
    }
}

window.document.addEventListener('DOMContentLoaded', onDomLoaded);
