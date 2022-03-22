import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="header-link">
                <h1 id="app-name">Revamp</h1>
            </Link>
            <GreetingContainer className="greeting-box"/>
        </div>
    )
}

export default NavBar;