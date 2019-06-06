import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = props => {
    const img = Math.floor(Math.random() * 30);

    return (
        <li className="restaurant-index-item">
            <Link to={`/restaurants/${props.restaurant.id}`}>
                <img className="restaurant-index-photo" src={ window.images[img] } />
            </Link>
            <div className="listing-details">
                <Link className="restaurant-name-link" to={`/restaurants/${props.restaurant.id}`}>
                    {props.restaurant.name}
                </Link>
                <ul className="restaurant-brief-details">
                    <li className="cuisine">{props.restaurant.cuisine}</li>
                    <li className="booked-times"><i className="fas fa-chart-line">&nbsp;</i>{`Booked ${img} times today`}</li>
                </ul>
            </div>
        </li>
    )
}

export default RestaurantIndexItem;