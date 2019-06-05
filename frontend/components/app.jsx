import React from 'react';

import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';

import Modal from './modal/modal';
import NavBar from './navbar/navbar';
import Home from './home/home_page';
import SearchContainer from './search/search_container'
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import Footer from './footer/footer'

const App = () => (
    <>
    <div className='app-content'>
        <Modal />
        <header>
            <NavBar />
        </header>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/restaurants/search" component={RestaurantIndexContainer} />
        </Switch>
        <Footer />
    </div>
    </>
);

export default App;