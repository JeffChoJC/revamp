json.review do
    json.partial! "api/reviews/review", review: @review
end

json.restaurant do
    json.partial! "api/restaurants/restaurant", restaurant: Restaurant.find_by(id: @review.restaurant_id)
    json.rating Restaurant.all[@review.restaurant_id].overall_rating
    json.food_rating Restaurant.all[@review.restaurant_id].food_rating
    json.service_rating Restaurant.all[@review.restaurant_id].service_rating
    json.ambience_rating Restaurant.all[@review.restaurant_id].ambience_rating
    json.value_rating Restaurant.all[@review.restaurant_id].value_rating
    json.noise_level Restaurant.all[@review.restaurant_id].noise_level
end