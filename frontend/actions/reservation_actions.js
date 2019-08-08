import * as ApiUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const RECEIVE_RES_ERRORS = 'RECEIVE_RES_ERRORS'

const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
})

const receiveReservations = reservations => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})

const removeReservation = id => ({
    type: REMOVE_RESERVATION,
    id
})

const receiveErrors = errors => ({
    type: RECEIVE_RES_ERRORS,
    errors
})

export const createReservation = reservation => dispatch => (
    ApiUtil.createReservation(reservation).then(
        reservation => dispatch(receiveReservation(reservation)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
)

export const editReservation = reservation => dispatch => (
    ApiUtil.editReservation(reservation).then(
        reservation => dispatch(receiveReservation(reservation)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
)

export const fetchReservations = userId => dispatch => (
    ApiUtil.fetchReservations(userId).then(reservations => dispatch(receiveReservations(reservations)))
)

export const cancelReservation = id => dispatch => (
    ApiUtil.cancelReservation(id).then(reservation => dispatch(removeReservation(reservation.user_id)))
)