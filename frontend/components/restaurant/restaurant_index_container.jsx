import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRestaurants, searchRestaurants } from '../../actions/restaurant_actions';
import { toArray } from '../../reducers/selectors';
import RestaurantIndex from './restaurant_index';

const msp = (state) => ({
    restaurants: toArray(state.entities.restaurants)
})

const mdp = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    searchRestaurants: (keyword) => dispatch(searchRestaurants(keyword))
})

export default withRouter(connect(msp, mdp)(RestaurantIndex))