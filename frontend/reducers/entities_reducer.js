import usersReducer from './users_reducer';
import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
    reviews: reviewsReducer
})

export default entitiesReducer;