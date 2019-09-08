import React from 'react';
import styled from 'styled-components';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
    return (
        <Container>
            <ItemImg src={imageUrl} alt='item' />
            <ItemDetails>
                <span>{name}</span>
                <span>{`${quantity} X ${price}$`}</span>
            </ItemDetails>
        </Container>
    )
}

export default CartItem;


const Container = styled.div`
display:flex;
height: 8rem;
margin-bottom: 1.5rem;
`

const ItemImg = styled.img`
width:30%;
`

const ItemDetails = styled.div`
width:70%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
padding: 0 2rem;
`