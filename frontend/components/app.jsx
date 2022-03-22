import React from 'react';

import {
    Route,
    Switch,
    Link,
} from 'react-router-dom';

import Modal from './modal/modal';
import NavBar from './navbar/navbar';
import Home from './home/home_page';
import CompanyIndexContainer from './company/company_index_container';
import CompanyShowContainer from './company/company_show_container';
import Profile from './profile/profile';
import FavoritesIndex from './favorite/favorites_index';
import Footer from './footer/footer'

const App = () => (
    <>
        <div className='app-content'>
            <Modal />
            <NavBar />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/companies/search" component={ CompanyIndexContainer } />
                <Route path="/companies/:id" component={ CompanyShowContainer } />
                <Route path="/profile" component={ Profile } />
                <Route path="/favorites" component={ FavoritesIndex } />
            </Switch>
        </div>
        <Footer />
    </>
);

export default App;