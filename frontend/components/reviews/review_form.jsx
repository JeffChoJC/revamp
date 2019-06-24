import React from 'react';
import { createReview } from '../../actions/review_actions';

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
                body: 0,

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
    }
    
    componentDidMount() {

    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state, {
            author_id: this.props.currentUser.id,
            restaurant_id: this.props.restaurant.id
        })

        delete review.hoverField;
        delete review.hoverStars;
        this.props.createReview(review);
    }

    render() {
        const { review } = this.props;
        if (!review) return null;
    }
}

export default ReviewForm;