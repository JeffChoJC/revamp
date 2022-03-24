import React from 'react';
import { connect } from 'react-redux';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';

const msp = state => {
    let favorited = false;
    if (state.entities.favorites[state.session.id]) favorited = true;

    return {
        currentUserId: state.session.id,
        favorite: state.entities.favorites[state.session.id],
        favorited: favorited
    }
}

const mdp = dispatch => ({
    save: favorite => dispatch(createFavorite(favorite)),
    unsave: id => dispatch(deleteFavorite(id))
})

class Favorites extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.currentUserId,
            company_id: this.props.company.id
        }

        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(e) {
        const { favorite, save, unsave } = this.props;
        e.preventDefault();

        if (favorite) {
            return unsave(favorite);
        } else {
            return save(this.state);
        }
    }

    render() {
        const { favorited } = this.props;
        if (!this.props.currentUserId) return null;

        if (favorited) {
            return (
                <button className="unfavorite-button" type="button" onClick={this.handleEvent}>
                    <i id="saved-bookmark" className="fas fa-bookmark"></i>
                    <p>Restaraunt Saved!</p>
                </button>
            )
        } else {
            return (
                <button className="favorite-button" type="button" onClick={ this.handleEvent }>
                    <i className="far fa-bookmark"></i>
                    <p>Save this company</p>
                </button>
            )
        }
    }
}

export default connect(msp, mdp)(Favorites);