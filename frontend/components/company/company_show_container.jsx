import React from 'react';
import { connect } from 'react-redux';
import { fetchCompany } from '../../actions/company_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import CompanyShow from "./company_show";
import { toArray } from '../../reducers/selectors';

const msp = (state, ownProps) => {
    let reviewed = false;
    const reviews = state.entities.reviews
    for (let key in reviews) {
        if (reviews[key]["author_id"] === state.session.id) {
            reviewed = true;
        }
    };

    return {
        company: state.entities.companies[ownProps.match.params.id],
        reviews: toArray(reviews),
        authors: state.entities.users,
        reviewed: reviewed,
        loggedIn: Boolean(state.session.id),
        errors: state.errors.company,
    }
}

const mdp = dispatch => ({
    fetchCompany: id => dispatch(fetchCompany(id)),
    createModal: () => dispatch(openModal('createReview')),
    editModal: () => dispatch(openModal('editReview')),
    closeModal: () => dispatch(closeModal()),
})

export default connect(msp, mdp)(CompanyShow);