import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchFavorites } from '../../actions/favorite_actions';
import { toArray } from '../../reducers/selectors';

const msp = ({ session, entities: { users, favorites } }) => ({
    currentUser: users[session.id],
    favorites: toArray(favorites)
});

const mdp = dispatch => ({
    fetchFavorites: userId => dispatch(fetchFavorites(userId)),
})

class FavoritesIndex extends React.Component {
    componentDidMount() {
        this.props.fetchFavorites(this.props.currentUser.id);
    }

    render() {
        const { currentUser, favorites } = this.props;
        if (!favorites) return null;

        const img = Math.floor(Math.random() * 30);
        const res = favorites.map(favorite => {
            if (!favorite.restaurant) return null;

            return (
                <>
                    <div className="profile-index-item">
                        <Link to={`/restaurants/${ favorite.restaurant_id }`}>
                            <img className="profile-index-photo" src={ window.images[img] } />
                        </Link>
                        <div className="profile-details">
                            <p id="profile-restaurant-name">{ favorite.restaurant.name }</p>
                            <p>{ favorite.restaurant.overall_rating }</p>
                            <p>{ favorite.restaurant.cuisine }</p>
                        </div>
                        <Link to={`/restaurants/${ favorite.restaurant_id }`}>Reserve Now</Link>
                    </div>
                </>
            )
        })

        return (
            <div className="profile-container">
                <div className="user-header">
                    <h1>{currentUser.fname} {currentUser.lname}</h1>
                </div>
                <div className="profile-content-container">
                    <div className="profile-navigation">
                        <Link to="/profile" className="profile-nav-res2">Reservations</Link>
                        <Link to="/favorites" className="profile-nav-fav2">Saved Restaurants</Link>
                    </div>
                    <div className="profile-index-container">
                        <h1>Saved Restaurants</h1>
                        {res}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(msp, mdp)(FavoritesIndex);