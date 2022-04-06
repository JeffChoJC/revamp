import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { parseDate } from '../search/search_helper';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        const { reservation } = this.props;

        if (this.props.reserved) {
            this.state = {
                date: new Date(reservation.date),
                time: reservation.time,
            }
        } else {
            this.state = {
                date: new Date(),
                time: "8:00:00",
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors;
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const reservation = Object.assign({}, this.props.reservation, this.state, {
            date: parseDate(this.state.date),
            time: this.state.time,
            company_id: this.props.company.id,
            user_id: this.props.userId
        })
        
        if (!this.props.reserved) {
            return this.props.create(reservation)
        } else {
            return this.props.edit(reservation)
        }
    }

    handleDelete(reservationId) {
        return () => this.props.cancel(reservationId)
    }

    
    handleChange(pickedDate) {
        this.setState({
            date: pickedDate
        })
    }
    
    submitButton() {
        if (!this.props.reserved) {
            return (
                <button className="resform-create"
                    onClick={ this.handleSubmit }>Make Appointment</button>
            )
        } else {
            return (
                <button className="resform-edit"
                    onClick={ this.handleSubmit }>Edit Appointment</button>
            )
        }
    }
            
    deleteButton() {
        if (this.props.reserved) {
            return (
                <button className="resform-delete" type="submit"
                    onClick={ this.handleDelete(this.props.reservation.id) }>Cancel Appointment</button>
            )
        }
    }

    renderErrors() {
        return (
            <ul className='resform-error-container'>
                {this.props.errors.map((error, i) => (
                    <li className="resform-error" key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    renderMessage() {
        const { reservation } = this.props;

        if (!reservation) return null;
        if (reservation.type === undefined) return null;

        if (reservation.type === "create") {
            return reservation.message[0];
        } else {
            return reservation.message[1];
        }
    }

    render() {
        return (
            <div className="reservation-form-container">
                <form className="reservation-form">
                    <h1 className="header">Make an Appointment</h1>
                    { this.renderErrors() }
                    <div className="confirmation-msg">{ this.renderMessage() }</div>
                    <div className="resform-date-time">
                        <div className="resform-date-container">
                            <h1>Date</h1>
                            <DatePicker
                                id="resform-datepicker"
                                selected={ this.state.date }
                                onChange={ this.handleChange }
                            />
                        </div>
                        <div className="resform-time-container">
                            <h1>Time</h1>
                            <div className="select-container">
                                <select className="resform-select" defaultValue={ this.state.time }
                                    onChange={ this.update("time") }>
                                    <option value="8:00:00">8:00 AM</option>
                                    <option value="8:30:00">8:30 AM</option>
                                    <option value="9:00:00">9:00 AM</option>
                                    <option value="9:30:00">9:30 AM</option>
                                    <option value="10:00:00">10:00 AM</option>
                                    <option value="10:30:00">10:30 AM</option>
                                    <option value="11:00:00">11:00 AM</option>
                                    <option value="11:30:00">11:30 AM</option>
                                    <option value="12:00:00">12:00 PM</option>
                                    <option value="12:30:00">12:30 PM</option>
                                    <option value="13:00:00">1:00 PM</option>
                                    <option value="13:30:00">1:30 PM</option>
                                    <option value="14:00:00">2:00 PM</option>
                                    <option value="14:30:00">2:30 PM</option>
                                    <option value="15:00:00">3:00 PM</option>
                                    <option value="15:30:00">3:30 PM</option>
                                    <option value="16:00:00">4:00 PM</option>
                                    <option value="16:30:00">4:30 PM</option>
                                    <option value="17:00:00">5:00 PM</option>
                                    <option value="17:30:00">5:30 PM</option>
                                    <option value="18:00:00">6:00 PM</option>
                                    <option value="18:30:00">6:30 PM</option>
                                    <option value="10:00:00">7:00 PM</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    { this.submitButton() }
                </form>
            { this.deleteButton() }
        </div>
        )
    }
}

export default ReservationForm;