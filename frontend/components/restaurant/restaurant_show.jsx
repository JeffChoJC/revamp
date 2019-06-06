import React from "react";

class RestaurantShow extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.id);
    }

    details() {
        const { restaurant } = this.props;

        return (
            <>
            <div className="cover-photo">Photo Here</div>
            {/* <div className="main-restaurant-content"> */}
                <div className="restaurant-container">
                    <div className="restaurant-overview">
                        <h1 className="restaurant-name">{ restaurant.name }</h1>
                        <ul className="restaurant-overview-list">
                            <li>
                                <i className="far fa-money-bill-alt"></i>
                                &nbsp; { restaurant.price_range }
                            </li>
                            <li>
                                <i className="fas fa-utensils"></i>
                                &nbsp; { restaurant.cuisine }
                            </li>
                        </ul>
                        <p className="restaurant-descr">{ restaurant.description }</p>
                    </div>
                    <div className="restaurant-details">
                        <ul className="restaurant-details-list">
                            <li>
                                <i id="map-icon" className="far fa-map"></i>
                                <div className="restaurant-detail-item">
                                    <h3>Address</h3>
                                    { restaurant.address }
                                </div>
                            </li>
                            <br/>
                            <li>
                                <i id="phone-icon" className="fas fa-phone"></i>
                                <div className="restaurant-detail-item">
                                    <h3>Phone Number</h3>
                                    { restaurant.phone_number }
                                </div>
                            </li>
                            <br/>
                            <li>
                                <i id="clock-icon" className="far fa-clock"></i>
                                <div className="restaurant-detail-item">
                                    <h3>Hours of Operation</h3>
                                    Dinner: { restaurant.open_time } - { restaurant.close_time }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            {/* </div> */}
            </>
        );
    }

    render() {
        const { restaurant } = this.props;
        if (!restaurant) return null;

        return (
            <div className="show">
                { this.details() }
            </div>
        );

    }
}

export default RestaurantShow;