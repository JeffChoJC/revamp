@restaurants.each do |restaurant|
    json.set! restaurant.name do
        json.partial! 'api/restaurants/restaurant', restaurant: restaurant
        # json.openings restaurant.open_slots
    end
end