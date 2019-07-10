import { RECEIVE_RES_ERRORS, RECEIVE_RESERVATION } from '../actions/reservation_actions';

const reservationErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RES_ERRORS:
            return action.errors;
        case RECEIVE_RESERVATION:
            return [];
        default:
            return state;
    }
}

export default reservationErrorsReducer;