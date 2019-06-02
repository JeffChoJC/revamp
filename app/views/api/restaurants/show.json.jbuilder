json.restaurant do
    json.partial! "api/restaurants/restaurant", restaurant: @restaurant
    json.reviewIds @restaurant.reviews.pluck(:id)
end

@restaurant.reviews.include(:author).each do |review|
    json.reviews do
        json.set! review.id do
            dojson.partial! 'api/reviews/review', review: review
        end
    end

    json.authors do
        json.set! review.author.id do
            json.extract! review.author, :id, :username
        end
    end
end