import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions'
import SessionForm from './session_form';

const msp = (state, ownProps) => {
    const clearErrors = () => {
        return state.errors['session'] = [];
    }

    const errors = state.errors.session.map((error) => {
        switch (error) {
            case 'Fname can\'t be blank':
                return 'Please enter your first name.'
            case 'Lname can\'t be blank':
                return 'Please enter your last name.'
            case 'Email can\'t be blank':
                return 'Please enter your email.'
            case 'Password is too short (minimum is 6 characters)':
                return 'Please enter your password.'
            default:
                return error
        }
        }
    );

    return {
        errors: errors,
        formType: 'signup',
        clearErrors: clearErrors()
    }
}

const mdp = dispatch => ({
    submit: (user) => dispatch(signup(user)),
    demoSubmit: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(SessionForm)