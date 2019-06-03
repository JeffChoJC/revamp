@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.partial! 'api/restaurants/restaurant', restaurant: restaurant
        json.reviewIds []
    end
end