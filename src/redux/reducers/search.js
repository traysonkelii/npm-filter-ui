import * as type from '../types';

const initialState = {
    queryString: '',
    results: [],
    loading: false,
    error: null,
};

export default function searchReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case type.SEARCH_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.SEARCH_SUCCESS:
            return {
                ...state,
                results: action.results,
                loading: false,
            }
        case type.SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        case type.UPDATE_QUERY_STRING:
            return {
                ...state,
                queryString: action.queryString,
            }
        default:
            return state;
    }
}