import React from 'react';

import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';

import NavBar from './navbar/navbar';
import Modal from './modal/modal';

const App = () => (
    <>
    <div className='app-content'>
        <Modal />
        <NavBar />
    </div>
    </>
);

export default App;