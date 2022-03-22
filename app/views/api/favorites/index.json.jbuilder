@favorites.each do |favorite|
    json.set! favorite.id do
        json.partial! 'api/favorites/favorite', favorite: favorite
        json.company favorite.company
        json.rating favorite.company.overall_rating
    end
end