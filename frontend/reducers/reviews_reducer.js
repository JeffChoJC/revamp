import {
    RECEIVE_RESTAURANT,
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from '../actions/restaurant_actions';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESTAURANT:
            return merge({}, state, action.reviews);
        case RECEIVE_REVIEW:
            const { review } = action;
            return merge({}, state, { [review.id]: review });
        case REMOVE_REVIEW:
            let newState = Object.assign({}, state);
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;