import * as ApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReview = ({ review }) => ({
    type: RECEIVE_REVIEW,
    review,
})

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const createReview = review => dispatch => (
    ApiUtil.createReview(review).then(review => dispatch(receiveReview(review)))
)

export const updateReview = review => dispatch => (
    ApiUtil.updateReview(review).then(review => dispatch(receiveReview(review)))
)

export const deleteReview = reviewId => dispatch => (
    ApiUtil.deleteReview(reviewId).then(review => dispatch(removeReview(reviewId)))
)
