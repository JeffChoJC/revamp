import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

const Home = () => (
    <>
        <SearchContainer />
        <div className="featured-areas">
            <div id="featured-areas-container">
                <h2 id="featured-areas-header">Featured Areas</h2>
                <div className="search-links-container">
                    <Link to="/restaurants/search?keyword=new%20york"
                        className="new-york-search">
                        <p className="area-header">New York</p>
                    </Link>
                    <Link to="/restaurants/search?keyword=chicago"
                        className="chicago-search">
                        <p className="area-header">Chicago</p>
                    </Link>
                    <Link to="/restaurants/search?keyword=los%20angeles"
                        className="los-angeles-search">
                        <p className="area-header">Los Angeles</p>
                    </Link>
                    <Link to="/restaurants/search?keyword=san%20francisco"
                        className="san-francisco-search">
                        <p className="area-header">San Francisco</p>
                    </Link>
                    <Link to="/restaurants/search?keyword=miami"
                        className="miami-search">
                        <p className="area-header">Miami</p>
                    </Link>
                    <Link to="/restaurants/search?keyword=las%20vegas"
                        className="las-vegas-search">
                        <p className="area-header">Las Vegas</p>
                    </Link>
                </div>
            </div>
        </div>
    </>
)

export default Home;