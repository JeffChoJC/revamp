import React from 'react';
import { connect } from 'react-redux';
import { toArray } from '../../reducers/selectors';
import ReviewForm from './review_form';

const msp = state => {
    const reviews = toArray(state.entities.reviews);
    const review = reviews.forEach(review => {
        if (review.author_id === state.entities.users[state.session.id]) {
            return review;
        }
    });

    return {
        restaurant: state.entities.restaurants[ownProps.match.params.id],
        review: review,
        currentUser: state.entities.users[state.session.id],
        formType: 'edit'
    }
}

const mdp = dispatch => ({
    editReview: (review) => dispatch(updateReview(review)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(ReviewForm);