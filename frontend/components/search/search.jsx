import React from "react";
import { today } from './search_helper';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/restaurants/search?keyword=${this.state.keyword}`);
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
                <form className="search-container" onSubmit={this.handleSubmit}>
                    <div className="reservation-options">
                        <div className="reservation-date">
                            <i id="date" className="far fa-calendar"></i>
                            <input type="text" id="datepicker"
                                value={`${today()}`}
                                readOnly
                            />
                        </div>
                        <select id="time-selector">
                            <option value="5:00 PM">5:00 PM</option>
                            <option value="5:30 PM">5:30 PM</option>
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
                    <div className="searchbar">
                        <i id={id} className="fas fa-search"></i>
                        <input className="searchbar-input"
                            value={this.state.keyword}
                            onChange={this.update("keyword")}
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
                        {this.banner()}
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