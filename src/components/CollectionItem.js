import React from 'react'
import styled from 'styled-components'

const CollectionItem = ({ name, price, imageUrl }) => {
    return (
        <Container>
            <Image imageUrl={imageUrl} />
            <Info>
                <span>{name}</span>
                <span>{price + '$'}</span>
            </Info>

        </Container>
    )
}

export default CollectionItem

const Container = styled.div`
width: 22%;
height:35rem;
`

const Image = styled.div`
width:100%;
height:95%;
margin-bottom: .5rem;
background-image:${props => `url(${props.imageUrl})`};
background-size:cover;
background-position:center;
`

const Info = styled.div`
height:5%;
width:100%;
display:flex;
justify-content:space-between;
`
