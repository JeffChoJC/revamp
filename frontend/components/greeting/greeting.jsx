import React from 'react';
import NavMenu from '../nav_menu/nav_menu';

const Greeting = ({ currentUser, signupModal, loginModal }) => {
    function greeting() {
        return (
            <header className='greeting-section'>
                <h2 className="greeting-name">Hi, {currentUser.fname}</h2>
                <i id="dropdown" className="fas fa-chevron-down"></i>
                <NavMenu />
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