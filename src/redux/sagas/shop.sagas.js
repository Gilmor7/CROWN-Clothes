import { call, takeLatest, put } from 'redux-saga/effects';
import { convertCollectionsSnapshotToMap, firestore } from '../../services/firebase/firebase.firestore';
import { FETCH_COLLECTIONS_START } from '../actions/actionTypes';
import {
    fetchCollectionsFailed,
    fetchCollectionsSucces
} from '../actions/shop.actions';


function* fetchCollectionAsync() {

    try {
        const collectionRef = firestore.collection('shopCollections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSucces(collectionsMap));
    }
    catch (err) {
        yield put(fetchCollectionsFailed(err));
    }

}

export function* fetchCollectionsStart() {
    yield takeLatest(FETCH_COLLECTIONS_START,
        fetchCollectionAsync)
}