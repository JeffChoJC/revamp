import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from "./restaurant_show";
import { toArray } from '../../reducers/selectors';

const msp = (state, ownProps) => {
    let reviewed = false;
    for (key in state.entities.reviews) {
        if (key[author_id] === state.session.id) {
            reviewed = true;
        }
    };

    return {
        restaurant: state.entities.restaurants[ownProps.match.params.id],
        reviews: toArray(state.entities.reviews),
        authors: state.entities.users,
        reviewed: Boolean(reviewed),
        errors: state.errors.restaurant,
    }
}

const mdp = (dispatch) => {
    return {
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
    }
}

export default connect(msp, mdp)(RestaurantShow);