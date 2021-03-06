import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_COMPANY } from '../actions/company_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
        case RECEIVE_COMPANY:
            return Object.assign({}, state, action.authors)
        default:
            return state;
    }
}

export default usersReducer;