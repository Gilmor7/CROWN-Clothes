import React from 'react'
import styled from 'styled-components';

import { connect } from 'react-redux';
import { removeItem, addItem, decreaseItemQuantity } from '../redux/actions/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, decreaseQuantity }) => {

    const { imageUrl, name, quantity, price } = cartItem;

    return (
        <Container>
            <ImgBlock>
                <ItemImage src={imageUrl} alt='item' />
            </ImgBlock>
            <Span>{name}</Span>
            <Quantity>
                <Arrow onClick={() => decreaseQuantity(cartItem)}>&#10096;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => addItem(cartItem)}>&#10097;</Arrow>
            </Quantity>
            <Span>{price}$</Span>
            <RemoveButton onClick={() => clearItem(cartItem)}> &#10006; </RemoveButton>

        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseQuantity: item => dispatch(decreaseItemQuantity(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);

const Container = styled.div`
    width: 100%;
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
  min-height: 10rem;
  font-size: 2rem;
  align-items: center;
`
const ImgBlock = styled.div`
    width: 21%;
    padding-right: 1.5rem;
`

const ItemImage = styled.img`
width:100%;
height:100%;
`

const Span = styled.span`
width:21%;
`

const Quantity = styled(Span)`
padding-left:1.5rem;
display:flex;
`

const Arrow = styled.div`
cursor:pointer;
`

const Value = styled.span`
margin: 0 1rem;
`


const RemoveButton = styled.div`
cursor:pointer;
padding-right: 1.2rem;
`