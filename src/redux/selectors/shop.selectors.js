import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const shopCollectionsSelector = createSelector(
    shopSelector,
    shop => shop.collections
);

export const shopCollectionsToPreview = createSelector(
    shopCollectionsSelector,
    collections => Object.values(collections)
);

export const collectionSelector = collectionUrlParam => createSelector(
    shopCollectionsSelector,
    collections => collections[collectionUrlParam]
);

export const shopCollectionExist = createSelector(
    shopCollectionsSelector,
    collections => collections !== null
)