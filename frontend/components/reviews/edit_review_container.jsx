import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toArray } from '../../reducers/selectors';
import { updateReview, deleteReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const msp = (state, ownProps) => {
    const user_id = state.entities.users[state.session.id].id;
    const restaurant_id = ownProps.location.pathname[ownProps.location.pathname.length - 1];
    const reviews = toArray(state.entities.reviews);
    const userReview = {};
    reviews.forEach(review => {
        if (review.author_id === user_id) {
            Object.assign(userReview, review);
        }
    });
    
    return {
        currentUser: state.entities.users[state.session.id],
        restaurant: state.entities.restaurants[restaurant_id],
        review: userReview,
        formType: 'edit'
    }
}

const mdp = dispatch => ({
    editReview: (review) => dispatch(updateReview(review)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(msp, mdp)(ReviewForm));