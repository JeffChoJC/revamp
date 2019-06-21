import React from 'react';

const ReviewIndexItem = props => {
    const { review, authors } = props;
    const stars = `${Math.round((review.overall_rating / 5) * 100)}%`;
    
    return (
        <li className="review-index-item">
            <div className="author-container">
                <div className="background-circle">
                    <h1 id="letter-bubble">{ authors[review.author_id].fname[0] }</h1>
                </div>
                <h1 className="firstname">{ authors[review.author_id].fname }</h1>
            </div>
            <div className="ratings-body-container">
                <div className="review-stars-outer">
                    <div className="review-stars-inner" style={{width:`${stars}`}}></div>
                </div>
                <div className="ratings-show">
                    <p>Overall</p>
                    <p id="ratings-number">{ review.overall_rating }</p>
                    <p>•&nbsp; Food</p>
                    <p id="ratings-number">{ review.food_rating }</p>
                    <p>•&nbsp; Service</p>
                    <p id="ratings-number">{ review.service_rating }</p>
                    <p>•&nbsp; Ambience</p>
                    <p id="ratings-number">{ review.ambience_rating }</p>
                </div>
                <p>{ review.body }</p>
            </div>
        </li>
    )    
}

export default ReviewIndexItem;