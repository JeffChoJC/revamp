import * as ApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReview = ({ review, company}) => ({
    type: RECEIVE_REVIEW,
    review,
    company
})

const removeReview = ({ review, company }) => ({
    type: REMOVE_REVIEW,
    reviewId: review.id,
    company
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