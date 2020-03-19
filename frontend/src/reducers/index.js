import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import listReducer from './listReducer';

export default combineReducers({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer,
    listing: listReducer
})