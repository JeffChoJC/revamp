import React from 'react';
import { Link } from 'react-router-dom';
import { numDollars, recRate, parseTime } from './restaurant_helper';
import { toArray } from '../../reducers/selectors';

const RestaurantIndexItem = props => {
    const img = Math.floor(Math.random() * 30);
    
    let openings = [];
    if (!props.restaurant.openings) {
        return null;
    } else {
        openings = toArray(props.restaurant.openings);
    }

    let timeslots = [];
    if (props.time) {
        let target = openings.indexOf(props.time);
        switch (target > 1) {
            case true:
                timeslots = openings.slice(target - 2, target + 3).map(slot => {
                    return (
                        <>
                            <p className="timeslot">{parseTime(slot)}</p>
                            &nbsp; &nbsp;
            </>
                    )
                })
                break;
            case false:
                timeslots = openings.slice(0, 5).map(slot => {
                    return (
                        <>
                            <p className="timeslot">{parseTime(slot)}</p>
                            &nbsp; &nbsp;
            </>
                    )
                })
        }
    }

    return (
        <li className="restaurant-index-item">
            <Link to={`/restaurants/${ props.restaurant.id }`}>
                <img className="restaurant-index-photo" src={ window.images[img] } />
            </Link>
            <div className="listing-details">
                <Link className="restaurant-name-link" to={`/restaurants/${props.restaurant.id}`}>
                    {props.restaurant.name}
                </Link>
                <ul className="restaurant-brief-details">
                    <li className="rating-dollars">
                        <div className="recs">
                            <p className="num-recs">
                                <i id="thumb-icon" className="far fa-thumbs-up">&nbsp;</i>
                                {`${ recRate() } Recommend`}
                            </p>
                        </div>
                        <div className="dollars">{ numDollars(props.restaurant.price_range) }</div>
                    </li>
                    <li className="cuisine">{ props.restaurant.cuisine }</li>
                    <li className="booked-times">
                        <i className="fas fa-chart-line">&nbsp;</i>
                        {`Booked ${ img } times today`}
                    </li>
                </ul>
                <div className="timeslots-container">
                    { timeslots }
                </div>
            </div>
        </li>
    )
}

export default RestaurantIndexItem;