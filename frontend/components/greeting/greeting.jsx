import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    function greeting() {
        return (
            <header className='header-section'>
                <h2 className="header-name">Hi, {currentUser.fname}</h2>
                <button className="header-logout" onClick={logout}>Sign Out</button>
            </header>
        )
    }

    function links() {
        return (
            <nav className="session-nav">
                <Link to='/signup'>Sign Up</Link>
                <Link to='/signin'>Sign In</Link>
            </nav>
        )
    }

    return currentUser ? greeting() : links();
}

export default Greeting;