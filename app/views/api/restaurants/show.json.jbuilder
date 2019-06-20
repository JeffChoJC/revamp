json.restaurant do
    json.partial! "api/restaurants/restaurant", restaurant: @restaurant
    json.rating @restaurant.overall_rating
    json.food_rating @restaurant.food_rating
    json.service_rating @restaurant.service_rating
    json.ambience_rating @restaurant.ambience_rating
    json.value_rating @restaurant.value_rating
    json.noise_level @restaurant.noise_level
end

@restaurant.reviews.each do |review|
    json.reviews do
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
        end
    end

    json.authors do
        json.set! review.author_id do
            json.extract! review.author, :id, :fname, :lname
        end
    end
end

