import axios from 'axios';
import { GET_LISTING, ADD_LISTING, LIST_LOADING, C_LIKE, GET_SINGLE_LIST, GET_ERRORS } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const addListing = listing => async (dispatch, getState) => {
    try {
        dispatch(setLoading());
        const result = await axios.post('http://localhost:5000/add', listing, tokenConfig(getState));
        console.log(result);
        dispatch({
            type: ADD_LISTING,
            payload: result.data
        });
    } catch (err) {
        console.error(`Error Occured`, err);
        dispatch(returnErrors(err.response.data, err.response.status, 'ADDLIST_FAIL'));
    }
};

export const getListings = () => async dispatch => {
    try {
        dispatch(setLoading());
        const res = await axios.get('http://localhost:5000');
        dispatch({
            type: GET_LISTING,
            payload: res.data
        })
    } catch (err) { dispatch(returnErrors(err.response.data, err.response.status, null)) }
}

export const controlLike = like => async dispatch => {
    try {
        const res = await axios.put('http://localhost:5000/user/like', like);
        dispatch({
            type: C_LIKE,
            payload: res.data
        });
    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status, null))
    }
}

export const singleList = id => async (dispatch, getState) => {

    dispatch({ type: LIST_LOADING });
    try {
        const res = await axios.get(`http://localhost:5000/singleList/${id}`, tokenConfig(getState));
        dispatch({
            type: GET_SINGLE_LIST,
            payload: res.data
        });
    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status, null));
    }
}


export const setLoading = () => {
    return {
        type: LIST_LOADING
    }
}