import React from 'react';

const Greeting = ({ currentUser, logout, signupModal, loginModal }) => {
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
                <button id="signup-button" onClick={signupModal}>Sign up</button>
                <button id="login-button" onClick={loginModal}>Sign in</button>
            </nav>
        )
    }

    return currentUser ? greeting() : links();
}

export default Greeting;