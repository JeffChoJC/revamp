import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from "./restaurant_show";
import { toArray } from '../../reducers/selectors';

const msp = (state, ownProps) => {
    return {
        restaurant: state.entities.restaurants[ownProps.match.params.id],
        reviews: toArray(state.entities.reviews),
        authors: state.entities.users,
        errors: state.errors.restaurant,
    }
}

const mdp = (dispatch) => {
    return {
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
    }
}

export default connect(msp, mdp)(RestaurantShow);