
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, TOGGLE_MODAL } from '../constants/ActionTypes'

export function modalButton(state = {}, action = {}){
    switch (action.type) {
        case TOGGLE_MODAL:
            return Object.assign({}, state, {showModal : action.showModal})
            return state;
        default:
            return state;
    }
}

export function searchPanel(state = {}, action = {}){
    switch (action.type) {
        case SEARCH_REQUEST:
            return Object.assign({}, state, {results : [], loaded : false, query: action.query})
        case SEARCH_SUCCESS:
            return Object.assign({}, state, {results : action.response, loaded : true})
        case SEARCH_FAILURE:
            return Object.assign({}, state, {results: [], loaded: true, error: action.error})
        default:
            return state;
    }
}