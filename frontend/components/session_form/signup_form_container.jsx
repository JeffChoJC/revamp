import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions'
import SessionForm from './session_form';

const msp = (state, ownProps) => {
    const clearErrors = () => {
        return state['errors'] = [];
    }

    const errors = state.errors.map((error) => {
        switch (error) {
            case 'Fname can\'t be blank':
                return 'Please enter your first name.'
            case 'Lname can\'t be blank':
                return 'Please enter your last name.'
            case 'Email can\'t be blank':
                return 'Please enter your last name.'
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
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(SessionForm)