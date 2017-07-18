import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

//SPA boot

const DEFAULT_APP_ID = 'root';

function renderApp(RootComponent, id = DEFAULT_APP_ID, args = {}) {
    const target = window.document.getElementById(id);

    if (target) {
        ReactDOM.render(
            <AppContainer>
                <RootComponent { ...args } />
            </AppContainer>,
            target,
        );
    }
}

function onDomLoaded() {
    renderApp(App);

    if (module.hot) {
        module.hot.accept('./App', () => {
            const NextRootContainer = require('./App').default;
            renderApp(NextRootContainer);
        });
    }
}

window.document.addEventListener('DOMContentLoaded', onDomLoaded);
