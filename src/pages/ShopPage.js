import React from 'react';
import styled from 'styled-components'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../components/CollectionsOverview';
import CollectionPage from './CollectionPage';

const ShopPage = ({ match }) => {
    return (
        <Container>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </Container>
    )
}

export default ShopPage;

const Container = styled.div`

`
