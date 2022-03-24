import React from 'react';
import { Link } from 'react-router-dom';
import { numDollars, recRate, parseTime } from './company_helper';
import { toArray } from '../../reducers/selectors';

const CompanyIndexItem = props => {
    const img = Math.floor(Math.random() * 30);
    
    let openings = [];
    if (!props.company.openings) {
        return null;
    } else {
        openings = toArray(props.company.openings);
    }

    let timeslots = [];
    if (props.time) {
        let target = openings.indexOf(props.time);
        while (target === -1) {
            let time = Number(props.time.slice(0, 2) + props.time.slice(3, 5));
            time += 30;

            if (String(time).slice(2,4) === "60") time += 40;
            target = openings.indexOf(String(time).slice(0, 2) + ":" + String(time).slice(2, 4) + ":00");
        }

        switch (target > 1) {
            case true:
                timeslots = openings.slice(target - 2, target + 3).map(slot => {
                    return (
                        <>
                            <Link to={`/companies/${ props.company.id }#${slot}`}
                                className="timeslot">{parseTime(slot)}
                            </Link>
                            &nbsp; &nbsp;
                        </>
                    )
                })
                break;
            case false:
                timeslots = openings.slice(0, 5).map(slot => {
                    return (
                        <>
                            <Link to={`/companies/${props.company.id}`}
                                className="timeslot">{parseTime(slot)}
                            </Link>
                            &nbsp; &nbsp;
                        </>
                    )
                })
        }
    }

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
                        <div className="dollars">{ numDollars(props.company.price_range) }</div>
                    </li>
                    <li className="cuisine">{ props.company.cuisine }</li>
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