import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global.styles';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

ReactDOM.render((
    <Provider store={store}>
        <GlobalStyles />
        <Router>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Router>
    </Provider>
), document.getElementById('root'));


