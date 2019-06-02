import * as ApiUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

const receiveRestaurant = ({ restaurant, reviews, authors }) => ({
    type: RECEIVE_RESTAURANT,
    restaurant,
    reviews,
    authors,
})

const receiveReview = ({ review, author }) => ({
// const receiveReview = ({ review, overall_rating, author }) => ({
    type: RECEIVE_REVIEW,
    review,
    // overall_rating,
    author,
})

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const fetchRestaurants = () => dispatch => (
    ApiUtil.fetchRestaurants().then(restaurants => dispatch(receiveRestaurants(restaurants))
    )
)

export const fetchRestaurant = id => dispatch => (
    ApiUtil.fetchRestaurant(id).then(restaurant => dispatch(receiveRestaurant(restaurant))
    )
)

export const createRestaurant = restaurant => dispatch => (
    ApiUtil.createRestaurant(restaurant).then(restaurant => dispatch(receiveRestaurant(restaurant)))
)

export const updateRestaurant = restaurant => dispatch => (
    ApiUtil.updateRestaurant(restaurant).then(restaurant => dispatch(receiveRestaurant(restaurant)))
)

export const createReview = review => dispatch => (
    ApiUtil.createReview(review).then(review => dispatch(receiveReview(review)))
)

export const updateReview = review => dispatch => (
    ApiUtil.updateReview(review).then(review => dispatch(receiveReview(review)))
)

export const deleteReview = reviewId => dispatch => (
    ApiUtil.deleteReview(reviewId).then(review => dispatch(removeReview(reviewId)))
)