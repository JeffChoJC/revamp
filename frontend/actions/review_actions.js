import * as ApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReview = ({ review, restaurant}) => ({
    type: RECEIVE_REVIEW,
    review,
    restaurant
})

const removeReview = ({ review, restaurant }) => ({
    type: REMOVE_REVIEW,
    reviewId: review.id,
    restaurant
})

export const createReview = review => dispatch => (
    ApiUtil.createReview(review).then(obj => dispatch(receiveReview(obj)))
)

export const updateReview = review => dispatch => (
    ApiUtil.updateReview(review).then(obj => dispatch(receiveReview(obj)))
)

export const deleteReview = review => dispatch => (
    ApiUtil.deleteReview(review).then(obj => dispatch(removeReview(obj)))
)