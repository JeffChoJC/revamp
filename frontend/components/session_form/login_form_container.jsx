import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = (state) => {
    const clearErrors = () => {
        return state.errors['session'] = [];
    }

    return {
        errors: state.errors.session,
        formType: 'login',
        clearErrors: clearErrors()
    }
}

const mdp = dispatch => ({
    submit: (user) => dispatch(login(user)),
    demoSubmit: (user) => dispatch(login(user)),
    openModal: () => dispatch(openModal('signup')),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(SessionForm)