import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="header-link">
                <h1 id="app-name"><img id="header-img" src="http://brand.opentable.com/wp-content/uploads/2015/03/OTLogo_rationalizationhor-r1c-01.png" />OpenRes</h1>
            </Link>
            <GreetingContainer className="greeting-box"/>
        </div>
    )
}

export default NavBar;