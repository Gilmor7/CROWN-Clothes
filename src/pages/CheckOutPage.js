import React from 'react';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { totalPriceSelector, cartItemsSelector } from '../redux/selectors/cart.selectors';

import CheckoutItem from '../components/CheckoutItem';
import StripeCheckoutButton from '../components/StripeCheckoutButton';

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
            <Warning>
                *Please use the following test credit card for payments*
                 <br />
                4242 4242 4242 4242 - EXP: 01/20  CVV: 123
            </Warning>
            <PayButton>
                <StripeCheckoutButton price={totalPrice} />
            </PayButton>
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

const Warning = styled.div`
color:red;
margin-top: 5rem;
font-size:2.4rem;
text-align:center;
`

const PayButton = styled.div`
    margin: 5rem 0 5rem auto;
`