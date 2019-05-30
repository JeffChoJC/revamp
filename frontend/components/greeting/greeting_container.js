import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const msp = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    signupModal: () => dispatch(openModal('signup')),
    loginModal: () => dispatch(openModal('login'))
});

export default connect(msp, mdp)(Greeting);