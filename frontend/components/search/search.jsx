import React from "react";

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
            <div className="search-banner-container">
                <h2 className="search-banner">Find your table for any occasion</h2>
            </div>
        );
    }


    render() {
        return (
            <div className="search-container">
                {this.banner()}
                <form className={"searchbar"} onSubmit={this.handleSubmit}>
                    <i className="fas fa-search"></i>
                    <input className="searchbar-input"
                        value={this.state.keyword}
                        onChange={this.update("keyword")}
                        placeholder="Location, Restaurant, or Cuisine"
                    />
                    <button className="search-submit">Let's go</button>
                </form>
            </div>
        )
    }
}

export default Search;