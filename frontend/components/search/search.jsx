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
            <div className="banner-container">
                <h2 className="banner">Find your table for any occasion</h2>
            </div>
        );
    }

    render() {
        const content = (id) => {
            return (
                <form className="search-container" onSubmit={this.handleSubmit}>
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