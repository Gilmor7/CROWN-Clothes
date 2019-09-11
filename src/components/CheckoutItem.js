import React from 'react'
import styled from 'styled-components';

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price } }) => {
    return (
        <Container>
            <ImgBlock>
                <ItemImage src={imageUrl} alt='item' />
            </ImgBlock>
            <Span>{name}</Span>
            <Span>{quantity}</Span>
            <Span>{price}</Span>
            <div> &#10006; </div>

        </Container>
    )
}

export default CheckoutItem;

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
    padding-right: 15px;
`
const Span = styled.span`
width:21%;
`

const ItemImage = styled.img`
width:100%;
height:100%;
`