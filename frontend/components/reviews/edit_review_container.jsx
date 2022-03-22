import React from 'react';
import { connect } from 'react-redux';
import { toArray } from '../../reducers/selectors';
import { updateReview, deleteReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';
import ReviewForm from './review_form';

const msp = (state, ownProps) => {
    const user_id = state.entities.users[state.session.id].id;
    const reviews = toArray(state.entities.reviews);
    const userReview = {};
    reviews.forEach(review => {
        if (review.author_id === user_id) {
            Object.assign(userReview, review);
        }
    });
    
    return {
        currentUser: state.entities.users[state.session.id],
        company: state.entities.companies[ownProps.match.params.id],
        review: userReview,
        formType: 'edit'
    }
}

const mdp = dispatch => ({
    editReview: (review) => dispatch(updateReview(review)),
    deleteReview: (review) => dispatch(deleteReview(review)),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(ReviewForm);