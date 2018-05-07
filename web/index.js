import App from './App';
import React from 'react';
import { injectGlobal } from 'styled-components';
import { render } from 'react-dom';

injectGlobal`
    body {
        background: ghostwhite;
        font-family: sans-serif;
    }
`

const appElement = document.getElementById('app');

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(<NextApp />, appElement);
    });
}

render(<App />, appElement);
