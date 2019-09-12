import { addItemToCart, decreaseQuantityFromItem } from '../utils/cart.utils';

import {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    REMOVE_ITEM,
    DECREASE_ITEM_QUANTITY
} from '../actions/actionTypes';

const initialState = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case DECREASE_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: decreaseQuantityFromItem(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;