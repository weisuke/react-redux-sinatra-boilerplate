import 'whatwg-fetch'
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, TOGGLE_MODAL } from '../constants/ActionTypes';

export function submitSearch(query) {
    return {
        types: [SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE],
        callAPI: () => fetch(`/search?q=${query}`),
        payload: { query }
    }
}

export function toggleModal(showModal) {
    return {
        type : TOGGLE_MODAL,
        showModal : showModal
    }
}
