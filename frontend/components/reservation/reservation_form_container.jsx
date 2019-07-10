import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReservationForm from "./reservation_form";
import { createReservation, editReservation, cancelReservation } from "../../actions/reservation_actions";

const msp = (state, ownProps) => {
    const clearErrors = () => {
        return state.errors['reservation'] = [];
    }
    
    return {
        reservation: state.entities.reservations,
        restaurant: state.entities.restaurants[ownProps.match.params.id],
        userId: state.session.id,
        loggedIn: Boolean(state.session.id),
        errors: state.errors.reservation,
        clearErrors: clearErrors()
    }
}

const mdp = dispatch => ({
    create: reservation => dispatch(createReservation(reservation)),
    edit: reservation => dispatch(editReservation(reservation)),
    cancel: id => dispatch(cancelReservation(id))
})

export default withRouter(connect(msp, mdp)(ReservationForm))