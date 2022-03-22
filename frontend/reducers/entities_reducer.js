import usersReducer from './users_reducer';
import { combineReducers } from 'redux';
import companiesReducer from './companies_reducer';
import reviewsReducer from './reviews_reducer';
import reservationsReducer from './reservations_reducer';
import favoritesReducer from './favorites_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    companies: companiesReducer,
    reviews: reviewsReducer,
    reservations: reservationsReducer,
    favorites: favoritesReducer
})

export default entitiesReducer;