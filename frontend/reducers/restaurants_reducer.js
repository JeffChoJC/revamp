import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_REVIEW:
            return Object.assign({}, state, { [action.restaurant.id]: action.restaurant });
        case REMOVE_REVIEW:
            return Object.assign({}, state, { [action.restaurant.id]: action.restaurant });
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            const newRestaurant = { [action.restaurant.id]: action.restaurant };
            return Object.assign({}, newRestaurant);
        default:
            return state;
    }
};

export default restaurantsReducer;