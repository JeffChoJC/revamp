import React from "react";
import { parseTime } from './company_helper';
import ReviewIndexItem from '../reviews/review_index_item';
import ReservationFormContainer from '../reservation/reservation_form_container';
import Favorites from '../favorite/favorites';

class CompanyShow extends React.Component {
    componentDidMount() {
        this.props.fetchCompany(this.props.match.params.id);
    }

    overallReviews() {
        const { company } = this.props;
        const stars = `${Math.round((company.rating / 5) * 100)}%`;
        
        return (
            <div className="ratings-summary">
                <div className="title-header">Overall Ratings and Reviews</div>
                <div>
                    <div className="company-stars-outer">
                        <div className="company-stars-inner" style={ {width: `${stars}`} }></div>
                    </div>
                    <p id="company-overall">{ Math.round(company.rating * 100) / 100 } &nbsp; based on recent ratings</p>
                </div>
                <ul>
                    <li key="food">
                        <p id="rating-number">{ company.food_rating }</p>
                        <p>Food</p>
                    </li>
                    <li key="service">
                        <p id="rating-number">{ company.service_rating }</p>
                        <p>Service</p>
                    </li>
                    <li key="ambience">
                        <p id="rating-number">{ company.ambience_rating }</p>
                        <p>Ambience</p>
                    </li>
                    <li key="value" id="last-rating">
                        <p id="rating-number">{ company.value_rating }</p>
                        <p>Value</p>
                    </li>
                </ul>
            </div>
        )
    }

    reviewDetails() {
        const { reviews, authors } = this.props;
        const reviewList = reviews.map(review => {
            return (
                <ul>
                    <ReviewIndexItem
                        key={ review.id }
                        review={ review }
                        authors={ authors }
                    />
                </ul>
            )
        })

        return (
            <div className="reviews-container">
                { reviewList }
            </div>
        )
    }

    reviewButton() {
        const { reviewed, loggedIn } = this.props;
        if (!loggedIn) return null;

        if (reviewed) {
            return (
                <button className="review-button" type="button"
                    onClick={ this.props.editModal }>
                        <i className="far fa-edit"></i>
                        &nbsp; Edit your review
                </button>
            )
        } else {
            return (
                <button className="review-button" type="button"
                    onClick={ this.props.createModal }>
                        <i className="far fa-edit"></i>
                        &nbsp; Write a review
                    </button>
            )
        }
    }

    render() {
        const { company } = this.props;
        if (!company) return null;

        return (
            <div className="show">
                <Favorites company={ company }/>
                <div className="cover-photo">Photo Here</div>
                <div className="show-details-container">
                    <div className="overview-details">
                        <div className="company-overview">
                            <h1 className="company-name">{ company.name }</h1>
                            <ul className="company-overview-list">
                                <li key="1">
                                    <i className="far fa-money-bill-alt"></i>
                                    &nbsp; { company.price_range }
                                </li>
                                <li key="2">
                                    <i className="fas fa-utensils"></i>
                                    &nbsp; { company.cuisine }
                                </li>
                            </ul>
                            <p className="company-descr">{ company.description }</p>
                            { this.overallReviews() }
                            <div className="review-button-container">
                                { this.reviewButton() }
                            </div>
                            { this.reviewDetails() }
                        </div>
                        <div className="company-details">
                            <ReservationFormContainer time={ this.props.location.hash.slice(1, 9) }/>
                            <ul className="company-details-list">
                                <li key="3">
                                    <i id="map-icon" className="far fa-map"></i>
                                    <div className="company-detail-item">
                                        <h3>Address</h3>
                                        { company.address }
                                    </div>
                                </li>
                                <br />
                                <li key="4">
                                    <i id="phone-icon" className="fas fa-phone"></i>
                                    <div className="company-detail-item">
                                        <h3>Phone Number</h3>
                                        { company.phone_number }
                                    </div>
                                </li>
                                <br />
                                <li key="5">
                                    <i id="clock-icon" className="far fa-clock"></i>
                                    <div className="company-detail-item">
                                        <h3>Hours of Operation</h3>
                                        Dinner: {`${parseTime(company.open_time)}PM - ${parseTime(company.close_time)}PM`}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default CompanyShow;