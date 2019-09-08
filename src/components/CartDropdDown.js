import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import CustomButton from './CustomButton';

const CartDropdDown = () => {
    return (
        <Container>
            <CartItems />
            <CustomButton>
                Go To Checkout
            </CustomButton>
        </Container>
    )
}


export default CartDropdDown;

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
