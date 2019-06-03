import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { toArray } from '../../reducers/selectors';
import RestaurantIndex from './restaurant_index';

const msp = (state, ownProps) => ({
    restaurants: toArray(state.entities.restaurants)
})

const mdp = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
})

export default connect(msp, mdp)(RestaurantIndex)