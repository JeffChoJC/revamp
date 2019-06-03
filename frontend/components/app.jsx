import React from 'react';

import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';

import Modal from './modal/modal';
import NavBar from './navbar/navbar';
import RestaurantIndexContainer from './search/restaurant_index_container';
import Footer from './footer/footer'

const App = () => (
    <>
    <div className='app-content'>
        <Modal />
        <header>
            <Route path="/" component={NavBar} />
        </header>
        <Switch>
            <Route path="/restaurants" component={RestaurantIndexContainer} />
        </Switch>
        <Footer />
    </div>
    </>
);

export default App;