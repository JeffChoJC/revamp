import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'signup',
    }
}

const mdp = dispatch => ({
    submit: (user) => dispatch(signup(user))
})

export default connect(msp, mdp)(SessionForm)