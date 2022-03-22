import { RECEIVE_COMPANIES, RECEIVE_COMPANY } from '../actions/company_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const companiesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_REVIEW:
            return Object.assign({}, state, { [action.company.id]: action.company });
        case REMOVE_REVIEW:
            return Object.assign({}, state, { [action.company.id]: action.company });
        case RECEIVE_COMPANIES:
            return action.companies;
        case RECEIVE_COMPANY:
            const newCompany = { [action.company.id]: action.company };
            return Object.assign({}, newCompany);
        default:
            return state;
    }
};

export default companiesReducer;