import {
    TOGGLE_CART_HIDDEN
} from '../actions/actionTypes';

const initialState = {
    hidden: true,
    cart: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;