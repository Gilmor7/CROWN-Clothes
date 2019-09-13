import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { addItem } from '../redux/actions/cart.actions';

import CustomButton from './CustomButton';

const CollectionItem = ({ item, addItemToCart }) => {

    const { name, price, imageUrl } = item;

    return (
        <Container>
            <Image imageUrl={imageUrl} />
            <Info>
                <span>{name}</span>
                <span>{price + '$'}</span>
            </Info>
            <AddToCartBtn onClick={() => addItemToCart(item)} inverted>
                Add to cart
            </AddToCartBtn>
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);

const AddToCartBtn = styled(CustomButton)`
opacity:0.7;
width:80%;
position: absolute;
top:26rem;
display:none;
`

const Image = styled.div`
width:100%;
height:95%;
margin-bottom: .5rem;
background-image:${props => `url(${props.imageUrl})`};
background-size:cover;
background-position:center;
`

const Container = styled.div`
width: 22vw;
height:35rem;
display: flex;
flex-direction: column;
align-items: center;
position:relative;

&:hover ${Image} {
opacity:0.8;
}

&:hover ${AddToCartBtn} {
display: block;
opacity:0.85;
}
`

const Info = styled.div`
height:5%;
width:100%;
display:flex;
justify-content:space-between;
`
