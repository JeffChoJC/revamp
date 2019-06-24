import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import ReviewForm from './review_form';

const msp = (state, ownProps) => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        restaurant: state.entities.restaurants[ownProps.match.params.id],
        formType: 'create'
    }
}

const mdp = dispatch => ({
    createReview: (review) => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(msp, mdp)(ReviewForm));