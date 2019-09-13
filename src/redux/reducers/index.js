import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//import all the reducers 
import userReducer from './user.reducer';
import cartReducer from './cart.reducer';
import directoryReducer from './directory.reducer';
import shopReducer from './shop.reducer';


//set redux-persist configuration for the cart reducer
// for persisting the cartItems without the hidden key
const cartPersistConfig = {
    key: 'cart',
    storage,
    blacklist: ['hidden']
}


const rootReducer = combineReducers({
    user: userReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
    directory: directoryReducer,
    shop: shopReducer
});


export default rootReducer;