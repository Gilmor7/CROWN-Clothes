import React, { useEffect, useRef } from 'react';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

//firebase imports
import { firestore, convertCollectionsSnapshotToMap } from '../services/firebase/firebase.firestore';

//redux imports
import { connect } from 'react-redux';
import { updateCollections } from '../redux/actions/shop.actions';
import { shopCollectionExist } from '../redux/selectors/shop.selectors';

import CollectionsOverview from '../components/CollectionsOverview';
import CollectionPage from './CollectionPage';

const ShopPage = ({ match, setCollections, collectionExist }) => {

    const unsubscribeFromSnapshot = useRef(null);

    useEffect(() => {

        const collectionRef = firestore.collection('shopCollections');

        collectionRef.onSnapshot(async (snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            // console.log(collectionsMap);
            setCollections(collectionsMap);
        })

        // return unsubscribeFromSnapshot.current();
    }, [])

    return (
        <Container>
            {
                !collectionExist ?
                    <div>Loading...</div>
                    :
                    <React.Fragment>
                        <Route exact path={`${match.path}`} component={CollectionsOverview} />
                        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
                    </React.Fragment>
            }
        </Container>
    )
}

const mapStateToProps = createStructuredSelector({
    collectionExist: shopCollectionExist
})

const mapDispatchToProps = dispatch => ({
    setCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

const Container = styled.div`

`
