import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers/index';
import rootSaga from '../redux/sagas/rootSaga';


//create saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

//redux devtools setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

const persistor = persistStore(store);

// run sagas
sagaMiddleware.run(rootSaga);

export { store, persistor };