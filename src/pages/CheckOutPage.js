import React from 'react';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { totalPriceSelector, cartItemsSelector } from '../redux/selectors/cart.selectors';

import CheckoutItem from '../components/CheckoutItem';

const CheckOutPage = ({ cartItems, totalPrice }) => {
    return (
        <Container>
            <Header>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </Header>
            {
                cartItems.map(item =>
                    <CheckoutItem key={item.id} cartItem={item} />
                )
            }
            <Total>Total: {totalPrice}$</Total>
        </Container>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector,
    totalPrice: totalPriceSelector
})

export default connect(mapStateToProps)(CheckOutPage);


const Container = styled.div`
  width: 60%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;
`
const HeaderBlock = styled.div`
width:21%;
flex: 0 0;
&:last-child{
    width: 16%;
}
`

const Header = styled.div`
width:100%;
display:flex;
justify-content:space-between;
padding:1.5rem 0;
border-bottom: 1px solid darkgrey;
`

const Total = styled.div`
    margin-top: 3rem;
    margin-left: auto;
    font-size: 3.6rem;
`