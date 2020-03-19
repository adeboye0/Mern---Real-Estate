// import axios from 'axios';
// import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING } from './types';
// import { tokenConfig } from './authActions';
// import { returnErrors } from './errorActions';

// export const getItems = () => dispatch => {
//     dispatch(itemsLoading());
//     axios.get('http://localhost:5000/').then(res => {
//         dispatch({
//             type: GET_ITEMS,
//             payload: res.data
//         })
//     }).catch(err => dispatch(returnErrors(err.response.data, err.response.status, null)))
// }

// export const deleteItem = id => (dispatch, getState) => {
//     axios.delete(`http://localhost:5000/delete/${id}`, tokenConfig(getState)).then(res => dispatch({
//         type: DELETE_ITEM,
//         payload: id
//     })).catch(err => dispatch(returnErrors(err.response.data, err.response.status, null)))
// }

// export const addItem = item => (dispatch, getState) => {
//     axios.post('http://localhost:5000/add', item, tokenConfig(getState)).then(res => dispatch({
//         type: ADD_ITEMS,
//         payload: res.data
//     })).catch(err => dispatch(returnErrors(err.response.data, err.response.status, null)))
// }

// export const itemsLoading = () => {
//     return {
//         type: ITEMS_LOADING
//     }
// }