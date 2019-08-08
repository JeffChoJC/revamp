import {
    RECEIVE_FAVORITE,
    RECEIVE_FAVORITES,
    REMOVE_FAVORITE } from '../actions/favorite_actions';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions'

const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESTAURANT:
            if (action.favorites === undefined) {
                return state;
            } else {
                return Object.assign({}, state, action.favorites);
            }
        case RECEIVE_FAVORITE:
            return Object.assign({}, state, action.favorite);
        case RECEIVE_FAVORITES:
            return Object.assign({}, action.favorites);
        case REMOVE_FAVORITE:
            let newState = Object.assign({}, state);
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default favoritesReducer;