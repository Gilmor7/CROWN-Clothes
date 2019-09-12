import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers/index';

const middlewares = [];

//redux devtools setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

const persistor = persistStore(store);

export { store, persistor };