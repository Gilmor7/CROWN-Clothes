import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { shopCollectionsSelector } from '../redux/selectors/shop.selectors';

import CollectionPreview from './CollectionPreview';

const CollectionsOverview = ({ collections }) => {
    return (
        <div>
            {
                collections.map(({ id, ...collectionProps }) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: shopCollectionsSelector
})

export default connect(mapStateToProps)(CollectionsOverview);
