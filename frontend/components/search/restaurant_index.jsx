import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import SearchContainer from './search_container';


class RestaurantIndex extends React.Component {
    componentDidMount() {
        const keyString = this.props.location.search.slice(9)
        const keywords = keyString.split("%20")
        const keyword = {keyword: keywords.join(" ")}

        this.props.searchRestaurants(keyword) || this.props.fetchRestaurants();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            const keyString = this.props.location.search.slice(9)
            const keywords = keyString.split("%20")
            const keyword = { keyword: keywords.join(" ") }

            this.props.searchRestaurants(keyword) || this.props.fetchRestaurants();
        }
    }

    render() {
        const restaurants = this.props.restaurants.map(restaurant => {
            return (
                <RestaurantIndexItem
                    key={restaurant.id}
                    restaurant={restaurant}
                />
            )
        })

        return (
            <>
            <SearchContainer />
            <div className="restaurant-index-container">
                <ul className="restaurants">
                    { restaurants }
                </ul>
            </div>
            </>
        )
    }
}

export default RestaurantIndex;