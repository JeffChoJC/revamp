import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { createReview } from '../../actions/review_actions';

import ReviewForm from './review_form';

const msp = (state, ownProps) => {
    const id = ownProps.location.pathname[ownProps.location.pathname.length - 1];
    return {
        currentUser: state.entities.users[state.session.id],
        restaurant: state.entities.restaurants[id],
        formType: 'create'
    }
}

const mdp = dispatch => ({
    createReview: (review) => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(msp, mdp)(ReviewForm));