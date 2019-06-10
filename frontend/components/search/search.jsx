import React from "react";
import { today } from './search_helper';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            date: new Date(),
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
        this.props.history.push(`/restaurants/search?keyword=${ this.state.keyword }`);
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
        const date = today(new Date());
        
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
                            <select id="time-selector">
                                <option value="5:00 PM">5:00 PM</option>
                                <option value="2 people">5:30 PM</option>
                                <option value="6:00 PM">6:00 PM</option>
                                <option value="6:30 PM">6:30 PM</option>
                                <option value="7:00 PM" selected>7:00 PM</option>
                                <option value="7:30 PM">7:30 PM</option>
                                <option value="8:00 PM">8:00 PM</option>
                                <option value="8:30 PM">8:30 PM</option>
                                <option value="9:00 PM">9:00 PM</option>
                                <option value="9:30 PM">9:30 PM</option>
                                <option value="10:00 PM">10:00 PM</option>
                            </select>
                        </div>
                        <div className="border-space">.</div>
                        <div className="reservation-party">
                            <i id="user-icon" className="far fa-user"></i>
                            <select id="party-selector">
                                <option value="1 person">1 person</option>
                                <option value="2 people" selected>2 people</option>
                                <option value="3 people">3 people</option>
                                <option value="4 people">4 people</option>
                                <option value="5 people">5 people</option>
                                <option value="6 people">6 people</option>
                                <option value="7 people">7 people</option>
                                <option value="8 people">8 people</option>
                                <option value="9 people">9 people</option>
                                <option value="10 people">10 people</option>
                                <option value="11 people">11 people</option>
                                <option value="12 people">12 people</option>
                                <option value="Larger party">Larger party</option>
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