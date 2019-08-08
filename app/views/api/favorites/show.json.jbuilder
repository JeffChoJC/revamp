json.set! @favorite.user_id do
    json.partial! 'api/favorites/favorite', favorite: @favorite
end