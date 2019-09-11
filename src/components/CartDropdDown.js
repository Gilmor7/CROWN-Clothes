import React from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux';
import { cartItemsSelector } from '../redux/selectors/cart.selectors';
import { toggleCartHidden } from '../redux/actions/cart.actions';

import CustomButton from './CustomButton';
import CartItem from './CartItem';

const CartDropdDown = ({ cartItems, history, dispatch }) => {
    return (
        <Container>
            <CartItems>
                {
                    cartItems.length ?
                        cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))
                        :
                        <span>Your cart is empty</span>
                }
            </CartItems>
            <CustomButton onClick={() => {
                dispatch(toggleCartHidden())
                history.push('/checkout')
            }}>
                Go To Checkout
            </CustomButton>
        </Container>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector
})

export default withRouter(connect(mapStateToProps)(CartDropdDown));

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
height: 34rem;
width: 24rem;
z-index:5;
padding:2rem;
border:1px solid black;
background-color:white;
position:absolute;
right:5.5rem;
top:8.2rem;
`

const CartItems = styled.div`
height:24rem;
display:flex;
flex-direction:column;
overflow:auto;
`
