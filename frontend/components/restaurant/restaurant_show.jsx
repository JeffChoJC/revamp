import React from "react";
import { parseTime } from './restaurant_helper';
import ReviewIndexItem from '../reviews/review_index_item';

class RestaurantShow extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.id);
    }

    reviewDetails() {
        const { reviews, authors } = this.props;
        const reviewList = reviews.map(review => {
            return (
                <ul>
                    <ReviewIndexItem
                        key={review.id}
                        review={review}
                        authors={authors}
                    />
                </ul>
            )
        })

        return (
            <div className="reviews-container">
                {reviewList}
            </div>
        )
    }

    render() {
        const { restaurant } = this.props;
        if (!restaurant) return null;

        return (
            <div className="show">
                <div className="cover-photo">Photo Here</div>
                <div className="show-details-container">
                    <div className="overview-details">
                        <div className="restaurant-overview">
                            <h1 className="restaurant-name">{restaurant.name}</h1>
                            <ul className="restaurant-overview-list">
                                <li key="1">
                                    <i className="far fa-money-bill-alt"></i>
                                    &nbsp; {restaurant.price_range}
                                </li>
                                <li key="2">
                                    <i className="fas fa-utensils"></i>
                                    &nbsp; {restaurant.cuisine}
                                </li>
                            </ul>
                            <p className="restaurant-descr">{restaurant.description}</p>
                        </div>
                        <div className="restaurant-details">
                            <ul className="restaurant-details-list">
                                <li key="3">
                                    <i id="map-icon" className="far fa-map"></i>
                                    <div className="restaurant-detail-item">
                                        <h3>Address</h3>
                                        {restaurant.address}
                                    </div>
                                </li>
                                <br />
                                <li key="4">
                                    <i id="phone-icon" className="fas fa-phone"></i>
                                    <div className="restaurant-detail-item">
                                        <h3>Phone Number</h3>
                                        {restaurant.phone_number}
                                    </div>
                                </li>
                                <br />
                                <li key="5">
                                    <i id="clock-icon" className="far fa-clock"></i>
                                    <div className="restaurant-detail-item">
                                        <h3>Hours of Operation</h3>
                                        Dinner: {`${parseTime(restaurant.open_time)}PM - ${parseTime(restaurant.close_time)}PM`}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {this.reviewDetails()}
                </div>
            </div>
        );

    }
}

export default RestaurantShow;