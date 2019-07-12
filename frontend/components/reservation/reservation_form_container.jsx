import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReservationForm from "./reservation_form";
import { createReservation, editReservation, cancelReservation } from "../../actions/reservation_actions";

const msp = (state, ownProps) => {
    const clearErrors = () => {
        return state.errors['reservation'] = [];
    }
    
    const errors = state.errors.reservation.map((error) => {
        switch (error) {
            case 'User must exist':
                return 'Please sign in.'
            case 'Time has already been taken':
                return 'There are no available tables for this day & time. Please try again.'
        }
    });
    
    let reserved = false;
    if (state.entities.reservations[state.session.id] !== undefined) {
        reserved = true;
    }

    return {
        reservation: state.entities.reservations[state.session.id],
        restaurant: state.entities.restaurants[ownProps.match.params.id],
        userId: state.session.id,
        reserved: reserved,
        errors: errors,
        clearErrors: clearErrors()
    }
}

const mdp = dispatch => ({
    create: reservation => dispatch(createReservation(reservation)),
    edit: reservation => dispatch(editReservation(reservation)),
    cancel: id => dispatch(cancelReservation(id)),
})

export default withRouter(connect(msp, mdp)(ReservationForm))