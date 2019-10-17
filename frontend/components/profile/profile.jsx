import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchReservations } from '../../actions/reservation_actions';
import { toArray } from '../../reducers/selectors';
import { parseTime } from '../restaurant/restaurant_helper';

const msp = ({ session, entities: { users, reservations } }) => ({
    currentUser: users[session.id],
    reservations: toArray(reservations)
});

const mdp = dispatch => ({
    fetchReservations: userId => dispatch(fetchReservations(userId)),
}) 

class Profile extends React.Component {
    componentDidMount() {
        this.props.fetchReservations(this.props.currentUser.id);
    }

    render() {
        const { currentUser, reservations } = this.props;
        if (!reservations) return null;

        const res = reservations.map(reservation => {
            if (!reservation.restaurant) return null;

            return (
                <>
                <div className="profile-index-item">
                    <Link to={`/restaurants/${reservation.restaurant_id}`}>
                            <img className="profile-index-photo" src={ window.images[Math.floor(Math.random() * 30)] } />
                    </Link>
                    <div className="profile-details">
                        <Link to={`/restaurants/${reservation.restaurant_id}`} id="profile-restaurant-name">
                            {reservation.restaurant.name}
                        </Link>
                        <p>{ reservation.date } at { parseTime(reservation.time) } PM.</p>
                        <p>Table for { reservation.party_size } people.</p>
                        <Link to={`/restaurants/${reservation.restaurant_id}`} className="modify-link">Modify</Link>
                    </div>
                </div>
                </>
            )
        })

        return (
            <div className="profile-container">
                <div className="user-header">
                    <h1>{ currentUser.fname } { currentUser.lname }</h1>
                </div>
                <div className="profile-content-container">
                    <div className="profile-navigation">
                        <Link to="/profile" className="profile-nav-res1">Reservations</Link>
                        <Link to="/favorites" className="profile-nav-fav1">Saved Restaurants</Link>
                    </div>
                    <div className="profile-index-container">
                        <h1>Upcoming Reservations</h1>
                        { res }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(msp, mdp)(Profile);