import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
    const clearErrors = () => {
        return state['errors'] = [];
    }
    
    return {
        errors: state.errors,
        formType: 'login',
        clearErrors: clearErrors()
    }
}

const mdp = dispatch => ({
    submit: (user) => dispatch(login(user)),
    demoSubmit: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(SessionForm)