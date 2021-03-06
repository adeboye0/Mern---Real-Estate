import axios from 'axios';
import { returnErrors } from './errorActions';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOADING,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

// Check token and load user

export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING });
    axios.get('http://localhost:5000/user', tokenConfig(getState)).then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, null));
            dispatch({
                type: AUTH_ERROR
            });
        })
}

export const register = (userData) => dispatch => {
    dispatch({ type: LOADING });
    axios.post('http://localhost:5000/register', userData).then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    })).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        dispatch({
            type: REGISTER_FAIL
        })
    })
}

export const login = (userData) => dispatch => {
    dispatch({ type: LOADING });

    axios.post('http://localhost:5000/login', userData).then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data

    })
    ).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
        dispatch({
            type: LOGIN_FAIL
        })

    })
}

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

export const tokenConfig = getState => {
    // Get token from localstorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
};
