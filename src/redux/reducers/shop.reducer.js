import {
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_FAILURE,
    FETCH_COLLECTIONS_SUCCESS
} from '../actions/actionTypes';

const initialState = {
    collections: null,
    isFetching: false,
    errMessage: null
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errMessage: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;