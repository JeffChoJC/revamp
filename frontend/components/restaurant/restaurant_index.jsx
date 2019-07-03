import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import SearchContainer from '../search/search_container';


class RestaurantIndex extends React.Component {
    parseKeyword() {
        const keyString = this.props.location.search.slice(9)
        const keywords = keyString.split("%20")
        const keyword = { keyword: keywords.join(" ") }

        this.props.searchRestaurants(keyword);
    }

    componentDidMount() {
        this.parseKeyword();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            this.parseKeyword();
        }
    }

    render() {
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
                    <p className="num-tables">{`${this.props.restaurants.length} TABLES AVAILABLE`}</p>
                    { restaurants }
                </ul>
            </div>
            </>
        )
    }
}

export default RestaurantIndex;