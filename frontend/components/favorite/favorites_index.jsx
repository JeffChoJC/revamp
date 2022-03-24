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
            if (!favorite.company) return null;

            const stars = `${Math.round((favorite.company.rating / 5) * 100)}%`;

            return (
                <>
                    <div className="profile-index-item">
                        <Link to={`/companies/${ favorite.company_id }`}>
                            <img className="profile-index-photo" src={ window.images[Math.floor(Math.random() * 30)] } />
                        </Link>
                        <div className="profile-details">
                            <Link to={`/companies/${favorite.company_id}`} id="profile-company-name">
                                {favorite.company.name}
                            </Link>
                            <br/>
                            <button className="unsave-button" onClick={ () => this.props.deleteFavorite(favorite.id) }>
                                <i id="saved-icon" className="fas fa-bookmark"></i>
                                <p>Remove from saved companies</p>
                            </button>
                            <div className="favorites-stars-outer">
                                <div className="favorites-stars-inner" style={{ width: `${stars}` }}></div>
                            </div>
                            <p>{ favorite.company.cuisine }</p>
                        </div>
                        <Link to={`/companies/${ favorite.company_id }`} className="link-to-show">
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
                        <Link to="/favorites" className="profile-nav-fav2">Saved Companies</Link>
                    </div>
                    <div className="profile-index-container">
                        <h1>Saved Companies</h1>
                        {fav}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(msp, mdp)(FavoritesIndex);