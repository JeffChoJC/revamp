import React from 'react';
import NavMenu from '../nav_menu/nav_menu';

const Greeting = ({ currentUser, signupModal, loginModal }) => {
    function toggle() {
        const elements = document.getElementsByClassName("navmenu-container");
        const numElements = elements.length;
        
        let i = 0;
        while (i < numElements) {
            elements[i].classList.toggle("hidden");
            i++;
        } 
    }

    function greeting() {
        return (
            <header onClick={() => toggle()} className='greeting-section'>
                <h2 className="greeting-name">Hi, { currentUser.fname }</h2>
                <i id="dropdown" className="fas fa-chevron-down"></i>
                <NavMenu />
                <div id="pointer" className="navmenu-container hidden">
                </div>
            </header>
        )
    }

    function links() {
        return (
            <nav className="session-nav">
                <button id="signup-button" onClick={ signupModal }>Sign up</button>
                <button id="login-button" onClick={ loginModal }>Sign in</button>
            </nav>
        )
    }

    return currentUser ? greeting() : links();
}

export default Greeting;