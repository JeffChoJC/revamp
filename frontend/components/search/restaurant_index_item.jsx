import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = props => {
    return (
        <li className="restaurant-index-item">
            <Link to={`/restaurants/${props.restaurant.id}`}>
                {props.restaurant.name}
            </Link>
            <ul className="restaurant-brief-details">
                <li id="cuisine">{props.restaurant.cuisine}</li>
            </ul>
        </li>
    )
}

export default RestaurantIndexItem;