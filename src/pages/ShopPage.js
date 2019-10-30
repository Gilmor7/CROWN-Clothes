import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

//firebase imports
import { firestore, convertCollectionsSnapshotToMap } from '../services/firebase/firebase.firestore';

//redux imports
import { connect } from 'react-redux';
import { updateCollections } from '../redux/actions/shop.actions';

import withSpinner from '../components/withSpinner.HOC';

import CollectionsOverview from '../components/CollectionsOverview';
import CollectionPage from './CollectionPage';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = ({ match, setCollections }) => {

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const collectionRef = firestore.collection('shopCollections');

        collectionRef.onSnapshot(async (snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            setCollections(collectionsMap);
            setLoading(false);
        })

    }, []);

    return (
        <div>
            <Route
                exact
                path={`${match.path}`}
                render={props =>
                    <CollectionsOverviewWithSpinner
                        isLoading={isLoading}
                        {...props} />}
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={props =>
                    <CollectionPageWithSpinner
                        isLoading={isLoading}
                        {...props} />}
            />
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    setCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);

