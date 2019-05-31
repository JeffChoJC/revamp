import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

const msp = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

const NavMenu = ({ logout }) => {
    return (
        <div className="navmenu-container">
            <Link to="/" class="navmenu-item">My Profile</Link>
            <Link to="/" class="navmenu-item">My Dining History</Link>
            <Link to="/" class="navmenu-item">My Saved Restaurants</Link>
            <Link to="/" class="navmenu-item" onClick={logout}>Sign Out</Link>
        </div>
    )
}

export default connect(msp, mdp)(NavMenu);