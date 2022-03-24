import React from 'react';
import { Link } from 'react-router-dom';
import { parseDate } from '../search/search_helper';
import SearchContainer from '../search/search_container';

const Home = () => (
    <>
        <SearchContainer />
        <div className="featured-areas">
            <div id="featured-areas-container">
                <h2 id="featured-areas-header">Featured Areas</h2>
                <div className="search-links-container">
                    <Link to={`/companies/search?keyword=new%20york#${ parseDate(new Date()) }#19:00:00`}
                        className="new-york-search">
                        <p className="area-header">New York</p>
                    </Link>
                    <Link to={`/companies/search?keyword=chicago#${parseDate(new Date())}#19:00:00`}
                        className="chicago-search">
                        <p className="area-header">Chicago</p>
                    </Link>
                    <Link to={`/companies/search?keyword=los%20angeles#${parseDate(new Date())}#19:00:00`}
                        className="los-angeles-search">
                        <p className="area-header">Los Angeles</p>
                    </Link>
                    <Link to={`/companies/search?keyword=san%20francisco#${parseDate(new Date())}#19:00:00`}
                        className="san-francisco-search">
                        <p className="area-header">San Francisco</p>
                    </Link>
                    <Link to={`/companies/search?keyword=miami#${parseDate(new Date())}#19:00:00`}
                        className="miami-search">
                        <p className="area-header">Miami</p>
                    </Link>
                    <Link to={`/companies/search?keyword=las%20vegas#${parseDate(new Date())}#19:00:00`}
                        className="las-vegas-search">
                        <p className="area-header">Las Vegas</p>
                    </Link>
                </div>
            </div>
        </div>
    </>
)

export default Home;