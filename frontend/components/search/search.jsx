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
            time: "19:00:00",
            partySize: "2"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    update(field) {
        debugger
        return e => this.setState({ [field]: e.target.value });
    }

    handleChange(pickedDate) {
        this.setState({
            date: pickedDate
        })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const date = parseDate(String(this.state.date));
        const time = this.state.time;
        this.props.history.push(`/restaurants/search?keyword=${ this.state.keyword }#${ date }#${ time }`);
    }

    banner() {
        if (this.props.location.pathname !== "/") return null;

        return (
            <div className="banner-container">
                <h2 className="banner">Find your table for any occasion</h2>
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
                            <select id="time-selector" onChange={ this.update("time") }>
                                <option value="17:00:00">5:00 PM</option>
                                <option value="17:30:00">5:30 PM</option>
                                <option value="18:00:00">6:00 PM</option>
                                <option value="18:30:00">6:30 PM</option>
                                <option value="19:00:00" selected>7:00 PM</option>
                                <option value="19:30:00">7:30 PM</option>
                                <option value="20:00:00">8:00 PM</option>
                                <option value="20:30:00">8:30 PM</option>
                                <option value="21:00:00">9:00 PM</option>
                                <option value="21:30:00">9:30 PM</option>
                            </select>
                        </div>
                        <div className="border-space">.</div>
                        <div className="reservation-party">
                            <i id="user-icon" className="far fa-user"></i>
                            <select id="party-selector" onChange={ this.update("partySize") }>
                                <option value="1">1 person</option>
                                <option value="2" selected>2 people</option>
                                <option value="3">3 people</option>
                                <option value="4">4 people</option>
                                <option value="5">5 people</option>
                                <option value="6">6 people</option>
                                <option value="7">7 people</option>
                                <option value="8">8 people</option>
                                <option value="9">9 people</option>
                                <option value="10">10 people</option>
                                <option value="11">11 people</option>
                                <option value="12">12 people</option>
                                <option value="13">Larger party</option>
                            </select>
                        </div>
                    </div>
                    <div className="searchbar">
                        <i id={ id } className="fas fa-search"></i>
                        <input className="searchbar-input"
                            value={ this.state.keyword }
                            onChange={ this.update("keyword") }
                            placeholder="Location, Restaurant, or Cuisine"
                        />
                    </div>
                    <button className="search-submit">Let's go</button>
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