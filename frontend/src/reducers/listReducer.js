import { LIST_LOADING, GET_LISTING, ADD_LISTING, C_LIKE, GET_SINGLE_LIST } from '../actions/types';
const initialState = {
    listings: [],
    list: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LISTING: return { ...state, listings: action.payload, loading: false }

        case ADD_LISTING: return { ...state, listings: [action.payload, ...state.listings], loading: false };

        case C_LIKE: console.log(action);
            const updatedLists = state.listings.map((list) => {
                if (list._id !== action.payload.value._id) {
                    return list;
                }
                return { ...list, ...action.payload.value }
            })
            return {
                ...state, listings: updatedLists, loading: false
            }
        case LIST_LOADING: return {
            ...state,
            loading: true
        };
        case GET_SINGLE_LIST: return {
            ...state,
            list: action.payload,
            loading: false
        };

        default:
            return state;
    }

} 