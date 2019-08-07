import React from 'react';
import { connect } from 'react-redux'

const msp = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

const NavMenu = ({ logout }) => {
    return (
        <div className="navmenu-container hidden">
            <Link to="/profile" className="navmenu-item">My Profile</Link>
            <Link to="/favorites" className="navmenu-item">My Saved Restaurants</Link>
            <Link to="/" className="navmenu-item" onClick={logout}>Sign Out</Link>
        </div>
    )
}

export default connect(msp, mdp)(NavMenu);