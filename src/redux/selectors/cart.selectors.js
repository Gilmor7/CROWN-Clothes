import { createSelector } from 'reselect';

const cartSelector = state => state.cart;

export const cartItemsSelector = createSelector(
    cartSelector,
    cart => cart.cartItems
);

export const carthiddenSelector = createSelector(
    cartSelector,
    cart => cart.hidden
);

export const cartItemsCountSelector = createSelector(
    cartItemsSelector,
    cartItems => cartItems.reduce(
        (accumalator, current) =>
            accumalator + current.quantity, 0)
);

export const totalPriceSelector = createSelector(
    cartItemsSelector,
    cartItems => cartItems.reduce(
        (accumalator, current) =>
            accumalator + (current.quantity * current.price), 0)
);