import * as ApiUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_RESTAURANT_ERRORS = 'RECEIVE_RESTAURANT_ERRORS';

// RESTAURANTS
const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

const receiveRestaurant = ({ restaurant, reviews, authors }) => ({
    type: RECEIVE_RESTAURANT,
    restaurant,
    reviews,
    authors
})

export const fetchRestaurants = () => dispatch => (
    ApiUtil.fetchRestaurants().then(restaurants => dispatch(receiveRestaurants(restaurants))
    )
)

export const fetchRestaurant = id => dispatch => (
    ApiUtil.fetchRestaurant(id).then(
        restaurant => dispatch(receiveRestaurant(restaurant))
    )
)

export const searchRestaurants = keyword => dispatch => (
    ApiUtil.searchRestaurants(keyword).then(restaurants => dispatch(receiveRestaurants(restaurants)))
)

// ERRORS
const receiveRestaurantErrors = errors => {
    return ({
        type: RECEIVE_RESTAURANT_ERRORS,
        errors
    });
};