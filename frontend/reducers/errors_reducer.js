import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import company from './company_errors_reducer';
import reservation from './reservation_errors_reducer';

const errorsReducer = combineReducers({
    session,
    company,
    reservation
});

export default errorsReducer;