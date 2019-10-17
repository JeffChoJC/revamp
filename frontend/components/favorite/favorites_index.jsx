import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchFavorites, deleteFavorite } from '../../actions/favorite_actions';
import { toArray } from '../../reducers/selectors';

const msp = ({ session, entities: { users, favorites } }) => ({
    currentUser: users[session.id],
    favorites: toArray(favorites)
});

const mdp = dispatch => ({
    fetchFavorites: userId => dispatch(fetchFavorites(userId)),
    deleteFavorite: id => dispatch(deleteFavorite(id))
})

class FavoritesIndex extends React.Component {
    componentDidMount() {
        this.props.fetchFavorites(this.props.currentUser.id);
    }

    render() {
        const { currentUser, favorites } = this.props;
        if (!favorites) return null;

        const fav = favorites.map(favorite => {
            if (!favorite.restaurant) return null;

            const stars = `${Math.round((favorite.restaurant.rating / 5) * 100)}%`;

            return (
                <>
                    <div className="profile-index-item">
                        <Link to={`/restaurants/${ favorite.restaurant_id }`}>
                            <img className="profile-index-photo" src={ window.images[Math.floor(Math.random() * 30)] } />
                        </Link>
                        <div className="profile-details">
                            <Link to={`/restaurants/${favorite.restaurant_id}`} id="profile-restaurant-name">
                                {favorite.restaurant.name}
                            </Link>
                            <br/>
                            <button className="unsave-button" onClick={ () => this.props.deleteFavorite(favorite.id) }>
                                <i id="saved-icon" className="fas fa-bookmark"></i>
                                <p>Remove from saved restaurants</p>
                            </button>
                            <div className="favorites-stars-outer">
                                <div className="favorites-stars-inner" style={{ width: `${stars}` }}></div>
                            </div>
                            <p>{ favorite.restaurant.cuisine }</p>
                        </div>
                        <Link to={`/restaurants/${ favorite.restaurant_id }`} className="link-to-show">
                            Reserve Now
                        </Link>
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
                        {fav}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(msp, mdp)(FavoritesIndex);