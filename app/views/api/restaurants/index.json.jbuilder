@restaurants.each do |restuarant|
    json.set! restaurant.id do
        json.partial! 'api/restaurants/restaurant', restaurant: restaurant
        json.reviewIds []
    end
end