import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import * as actions from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root");

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = actions.login;
    window.logout = actions.logout;
    window.signup = actions.signup;

    ReactDOM.render(<Root store={store} />, root);
});

