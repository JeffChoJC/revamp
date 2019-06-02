import { 
    RECEIVE_RESTAURANTS,
    RECEIVE_RESTAURANT,
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from '../actions/restaurant_actions';

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            const newRestaurant = { [action.restaurant.id]: action.restaurant };
            return Object.assign({}, state, newRestaurant);
        case RECEIVE_REVIEW:
            const { review, overall_rating } = action;
            const newState = Object.assign({}, state);
            newState[review.restaurant_id].reviewIds.push(review.id);
            newState[review.restaurant_id].overall_rating = overall_rating;
            return newState;
        default:
            return state;
    }
};

export default restaurantsReducer;