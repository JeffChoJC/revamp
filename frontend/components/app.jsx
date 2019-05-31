import React from 'react';

import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';

import NavBar from './navbar/navbar';
import Modal from './modal/modal';
import Footer from './footer/footer'

const App = () => (
    <>
    <div className='app-content'>
        <Modal />
        <NavBar />
        <Footer />
    </div>
    </>
);

export default App;