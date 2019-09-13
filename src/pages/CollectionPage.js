import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { collectionSelector } from '../redux/selectors/shop.selectors';

import CollectionItem from '../components/CollectionItem';


const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <Container>
            <Title>{title}</Title>
            <CollectionContainer>
                {
                    items.map(item =>
                        <CollectionItem key={item.id} item={item} />)
                }
            </CollectionContainer>
        </Container>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: collectionSelector(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);

const Container = styled.div`
display:flex;
flex-direction:column;
margin-bottom: 4rem;
`

const Title = styled.h2`
font-size: 3.8rem;
margin: 0 auto 3rem;
text-transform: capitalize;
`

const CollectionContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
row-gap: 4rem;
column-gap:1rem;
`
