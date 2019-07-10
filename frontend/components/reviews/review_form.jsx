import React from 'react';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.formType === 'create') {
            this.state = {
                food_rating: 0,
                service_rating: 0,
                ambience_rating: 0,
                value_rating: 0,
                noise_level: 0,
                body: "",

                hoverField: null,
                hoverStars: null
            }
        } else {
            const { review } = this.props;
            this.state = {
                food_rating: review.food_rating,
                service_rating: review.service_rating,
                ambience_rating: review.ambience_rating,
                value_rating: review.value_rating,
                noise_level: review.noise_level,
                body: review.body,

                hoverField: null,
                hoverStars: null
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    rating(field) {
        let stars = [];
        let max;

        if (field === "noise_level") {
            max = 4;
        } else {
            max = 5;
        }

        for (let i = 1; i <= max; i++) {
            let numStars = this.state.hoverField === field ? this.state.hoverStars : this.state[field];
            let color = (i <= numStars) ? "filled" : "empty"

            stars.push(
                <i key={i} className="fas fa-star" id={ color }
                    onMouseEnter={ this.handleMouseEnter(field, i) }
                    onMouseLeave={ this.handleMouseLeave() }
                    onClick={ this.rate(field, i) }>
                </i>
            )
        }
        return stars;
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.props.review, this.state, {
            author_id: this.props.currentUser.id,
            restaurant_id: this.props.restaurant.id
        })

        delete review.hoverField;
        delete review.hoverStars;
        if (this.props.formType === 'create') {
            return this.props.createReview(review)
                .then(this.props.closeModal)
        } else {
            return this.props.editReview(review)
                .then(this.props.closeModal)
        }
    }

    handleMouseEnter(field, stars) {
        return e => this.setState({
            hoverField: field,
            hoverStars: stars
        })
    }

    handleMouseLeave(e) {
        return e => this.setState({
           hoverField: null,
           hoverStars: null 
        })
    }

    rate(field, stars) {
        return e => this.setState({ [field]: stars })
    }

    handleDelete(review) {
        return this.props.deleteReview(review)
            .then(this.props.closeModal)
    }

    deleteButton(review) {
        if (this.props.formType === "edit") {
            return (
                <button type="submit" className="delete-review-button"
                    onClick={ () => this.handleDelete(review) }>Delete Review</button>
            )
        }
    }

    render() {
        const { restaurant, currentUser, review } = this.props;
        return (
            <div className="review-form-container">
                <form className="review-form" onSubmit={ this.handleSubmit }>
                    <h3 className="review-header">
                        {`${currentUser.fname}, how was your experience at ${restaurant.name}?`}
                    </h3>
                    <h3>Rate your dining experience:</h3>
                    <div className="review-stars-container">
                        <div className="title-rating-container">
                            <p>Food</p>
                            <div className="review-star-rating">
                                { this.rating("food_rating") }
                            </div>
                        </div>

                        <div className="title-rating-container">
                            <p>Service</p>
                            <div className="review-star-rating">
                                { this.rating("service_rating") }
                            </div>
                        </div>

                        <div className="title-rating-container">
                            <p>Ambience</p>
                            <div className="review-star-rating">
                                { this.rating("ambience_rating") }
                            </div>
                        </div>

                        <div className="title-rating-container">
                            <p>Value</p>
                            <div className="review-star-rating">
                                { this.rating("value_rating") }
                            </div>
                        </div>

                        <div className="title-rating-container">
                            <p>Noise (1 - Quiet)</p>
                            <div className="review-star-rating">
                                { this.rating("noise_level") }
                            </div>
                        </div>
                    </div>
                    <div className="review-body-container">
                        <textarea
                            className="review-body"
                            placeholder="Please leave a brief description about your experience."
                            value={ this.state.body }
                            onChange={ this.update('body') }
                        />
                    </div>

                    <input type="submit"
                        value="Submit Review"
                        className="submit-review-button"
                    />
                </form>
                { this.deleteButton(review) }
            </div>
        )
    }
}

export default ReviewForm;