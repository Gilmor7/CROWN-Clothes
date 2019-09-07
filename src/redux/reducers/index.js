import { combineReducers } from 'redux';

//import all the reducers 
import userReducer from './user.reducer';

export default combineReducers({
    user: userReducer
});