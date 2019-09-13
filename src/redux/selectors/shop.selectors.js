import { createSelector } from 'reselect';
import { COLLECTIONS_ID_MAP } from '../../services/collectionsIdMap';

const shopSelector = state => state.shop;

export const shopCollectionsSelector = createSelector(
    shopSelector,
    shop => shop.collections
);

export const collectionSelector = collectionUrlParam => createSelector(
    shopCollectionsSelector,
    collections =>
        collections.find(collection =>
            collection.id === COLLECTIONS_ID_MAP[collectionUrlParam])
);