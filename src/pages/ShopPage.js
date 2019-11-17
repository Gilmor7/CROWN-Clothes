import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

//redux imports
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../redux/actions/shop.actions';
import { selectCollectionsFetching, selectIsCollectionsLoaded } from '../redux/selectors/shop.selectors';

import withSpinner from '../components/withSpinner.HOC';

import CollectionsOverview from '../components/CollectionsOverview';
import CollectionPage from './CollectionPage';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = ({ match, fetchCollections, isCollectionFetching, selectIsCollectionsLoaded }) => {

    useEffect(() => {
        fetchCollections();
    }, []);

    return (
        <div>
            <Route
                exact
                path={`${match.path}`}
                render={props =>
                    <CollectionsOverviewWithSpinner
                        isLoading={isCollectionFetching}
                        {...props} />}
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={props =>
                    <CollectionPageWithSpinner
                        isLoading={!selectIsCollectionsLoaded}
                        {...props} />}
            />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectCollectionsFetching,
    selectIsCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollections: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

