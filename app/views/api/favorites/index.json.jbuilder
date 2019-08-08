@favorites.each do |favorite|
    json.set! favorite.id do
        json.partial! 'api/favorites/favorite', favorite: favorite
        json.restaurant favorite.restaurant
    end
end