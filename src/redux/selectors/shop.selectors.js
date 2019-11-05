import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const shopCollectionsSelector = createSelector(
    shopSelector,
    shop => shop.collections
);

export const shopCollectionsToPreview = createSelector(
    shopCollectionsSelector,
    collections => collections ? Object.values(collections) : []
);

export const collectionSelector = collectionUrlParam => createSelector(
    shopCollectionsSelector,
    collections => collections ? collections[collectionUrlParam] : null
);

export const shopCollectionExist = createSelector(
    shopCollectionsSelector,
    collections => collections !== null
);

export const selectCollectionsFetching = createSelector(
    shopSelector,
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    shopSelector,
    shop => !!shop.collections
)