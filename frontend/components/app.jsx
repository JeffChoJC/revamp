import React from 'react';

import {
    Route,
    Switch,
    Link,
} from 'react-router-dom';

import Modal from './modal/modal';
import NavBar from './navbar/navbar';
import Home from './home/home_page';
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import RestaurantShowContainer from './restaurant/restaurant_show_container';
// import
// import 
import Footer from './footer/footer'

const App = () => (
    <>
        <div className='app-content'>
            <Modal />
            <NavBar />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/restaurants/search" component={ RestaurantIndexContainer } />
                <Route path="/restaurants/:id" component={ RestaurantShowContainer } />
                {/* <Route path="/profile" component={ ProfileContainer } /> */}
                {/* <Route path="/favorites" component={ FavoritesContainer } /> */}
            </Switch>
        </div>
        <Footer />
    </>
);

export default App;