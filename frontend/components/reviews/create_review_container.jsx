import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createReview } from '../../actions/review_actions';

import ReviewForm from './review_form';

const msp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    company: state.entities.companies[ownProps.match.params.id],
    formType: 'create'
})

const mdp = dispatch => ({
    createReview: (review) => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(ReviewForm);