import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => ({
    errors: state.errors,
    formType: 'login',
})

const mdp = dispatch => ({
    submit: (user) => dispatch(login(user))
})

export default connect(msp, mdp)(SessionForm)