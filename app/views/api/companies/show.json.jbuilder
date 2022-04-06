json.company do
    json.partial! "api/companies/company", company: @company
    json.rating @company.overall_rating
    json.service_rating @company.service_rating
    json.value_rating @company.value_rating
    json.efficiency_rating @company.efficiency_rating
end

@company.reviews.each do |review|
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

@company.reservations.each do |reservation|
    json.reservations do
        json.set! reservation.user_id do
            json.partial! 'api/reservations/reservation', reservation: reservation
        end
    end
end

@company.favorites.each do |favorite|
    json.favorites do
        json.set! favorite.user_id do
            json.partial! 'api/favorites/favorite', favorite: favorite
        end
    end
end