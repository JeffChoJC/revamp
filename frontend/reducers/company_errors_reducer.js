import { RECEIVE_COMPANY_ERRORS, RECEIVE_COMPANY } from '../actions/company_actions';

const companyErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_COMPANY_ERRORS:
            return action.errors;
        case RECEIVE_COMPANY:
            return [];
        default:
            return state;
    }
}

export default companyErrorsReducer;