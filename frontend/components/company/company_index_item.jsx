import React from 'react';
import { Link } from 'react-router-dom';
import { numDollars, recRate, parseTime } from './company_helper';
import { toArray } from '../../reducers/selectors';

const CompanyIndexItem = props => {
    const img = Math.floor(Math.random() * 30);
    
    let openings = toArray(props.company.openings);
    if (!openings) {
        return null;
    }

    let timeslots = openings.map(slot => {
        return (
            <>
                <Link to={`/companies/${ props.company.id }#${slot}`}
                    className="timeslot">{slot}
                </Link>
                &nbsp; &nbsp;
            </>
        )
    })

    return (
        <li className="company-index-item">
            <Link to={`/companies/${ props.company.id }`}>
                <img className="company-index-photo" src={ window.images[img] } />
            </Link>
            <div className="listing-details">
                <Link className="company-name-link" to={`/companies/${props.company.id}`}>
                    {props.company.name}
                </Link>
                <ul className="company-brief-details">
                    <li className="rating-dollars">
                        <div className="recs">
                            <p className="num-recs">
                                <i id="thumb-icon" className="far fa-thumbs-up">&nbsp;</i>
                                {`${ recRate() } Recommend`}
                            </p>
                        </div>
                        {/* <div className="dollars">{ numDollars(props.company.price_range) }</div> */}
                    </li>
                    {/* <li className="cuisine">{ props.company.cuisine }</li> */}
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

export default CompanyIndexItem;