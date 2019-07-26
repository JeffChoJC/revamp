import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import SearchContainer from '../search/search_container';


class RestaurantIndex extends React.Component {
    search() {
        const keyString = this.props.location.search.slice(9);
        const keywords = keyString.split("%20");
        const datetime = this.props.location.hash.split("#");
        const date = datetime[1].split("%20").join(" ");
        const time = datetime[2];
        const keyword = { keyword: keywords.join(" "), date: date, time: time }
        
        this.props.searchRestaurants(keyword);
    }

    componentDidMount() {
        this.search();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            this.search();
        }
    }

    render() {
        if (!this.props.restaurants) return null;
        
        const restaurants = this.props.restaurants.map(restaurant => {
            return (
                <RestaurantIndexItem
                    key={ restaurant.id } 
                    restaurant={ restaurant }
                />
            )
        })

        return (
            <>
            <SearchContainer />
            <div className="table-results"></div>
            <div className="restaurant-index-container">
                <ul className="restaurants">
                    <p className="num-tables">{`${this.props.restaurants.length} RESTAURANTS AVAILABLE`}</p>
                    { restaurants }
                </ul>
            </div>
            </>
        )
    }
}

export default RestaurantIndex;