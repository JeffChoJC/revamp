import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import RestaurantShow from "./restaurant_show";
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
        restaurant: state.entities.restaurants[ownProps.match.params.id],
        reviews: toArray(reviews),
        authors: state.entities.users,
        reviewed: Boolean(reviewed),
        loggedIn: Boolean(state.session.id),
        errors: state.errors.restaurant,
    }
}

const mdp = (dispatch) => {
    return {
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
        createModal: () => dispatch(openModal('createReview')),
        editModal: () => dispatch(openModal('editReview')),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(RestaurantShow);