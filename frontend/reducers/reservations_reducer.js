import {
    RECEIVE_RESERVATION,
    RECEIVE_RESERVATIONS,
    REMOVE_RESERVATION,
} from '../actions/reservation_actions';

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, { [action.reservation.id]: action.reservation });
        case RECEIVE_RESERVATIONS:
            return Object.assign({}, state, action.reservations);
        case REMOVE_RESERVATION:
            let newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default reservationsReducer;