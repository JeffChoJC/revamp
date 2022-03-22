import React from "react";
import { parseDate } from './search_helper';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            date: new Date(),
            time: "8:00:00",
            party_size: "2"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleChange(pickedDate) {
        this.setState({
            date: pickedDate
        })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const date = parseDate(this.state.date);
        const time = this.state.time;
        this.props.history.push(`/companies/search?keyword=${ this.state.keyword }#${ date }#${ time }`);
    }

    banner() {
        if (this.props.location.pathname !== "/") return null;

        return (
            <div className="banner-container">
                <h2 className="banner">Find Your Contractor</h2>
            </div>
        );
    }

    render() {
        const content = (id) => {
            return (
                <form className="search-container" onSubmit={ this.handleSubmit }>
                    <div className="reservation-options">
                        <div className="reservation-date">
                            <i id="date" className="far fa-calendar"></i>
                            <DatePicker
                                id="datepicker"
                                selected={ this.state.date }
                                onChange={ this.handleChange }
                            />
                        </div>
                        <div className="reservation-time">
                            <i id="ticker" className="far fa-clock"></i>
                            <select id="time-selector" defaultValue={ this.state.time }
                                onChange={ this.update("time") }>
                                <option value="8:00:00">8:00 AM</option>
                                <option value="8:30:00">8:30 AM</option>
                                <option value="9:00:00">9:00 AM</option>
                                <option value="9:30:00">9:30 AM</option>
                                <option value="10:30:00">10:00 AM</option>
                                <option value="10:30:00">10:30 AM</option>
                                <option value="11:30:00">11:00 AM</option>
                                <option value="11:30:00">11:30 AM</option>
                                <option value="12:30:00">12:00 PM</option>
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
                                <option value="19:00:00">7:00 PM</option>
                            </select>
                        </div>
                    </div>
                    <div className="searchbar">
                        <i id={ id } className="fas fa-search"></i>
                        <input className="searchbar-input"
                            value={ this.state.keyword }
                            onChange={ this.update("keyword") }
                            placeholder="Location or Industry"
                        />
                    </div>
                    <button className="search-submit">Search</button>
                </form>
            )
        }

        if (this.props.location.pathname === "/") {
            return (
                <div className="splash-search-container">
                    <div className="banner-with-search-container">
                        { this.banner() }
                        { content() }
                    </div>
                </div>
            )
        } else {
            return (
                <div className="others-searchbar-container">
                    { content("icon") }
                </div>
            )
        }
    }
}

export default Search;