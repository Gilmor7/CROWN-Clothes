import {
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_FAILURE,
    FETCH_COLLECTIONS_SUCCESS
} from '../actions/actionTypes';

//firebase imports
// import { firestore, convertCollectionsSnapshotToMap } from '../../services/firebase/firebase.firestore';


export const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START
})

export const fetchCollectionsSucces = payload => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload
});

export const fetchCollectionsFailed = payload => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload
});


// export const fetchCollectionsAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('shopCollections');

//         dispatch(fetchCollectionsStart());

//         collectionRef.get()
//             .then(snapshot => {
//                 const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//                 dispatch(fetchCollectionsSucces(collectionsMap));
//             })
//             .catch(err => dispatch(fetchCollectionsFailed(err.message)));
//     }
// }

