export const createFavorite = favorite => {
    return $.ajax({
        method: 'POST',
        url: '/api/favorites/',
        data: { favorite }
    })
}

export const fetchFavorites = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/favorites/`,
        data: { userId }
    })
}

export const deleteFavorite = id => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/favorites/${id}`
    })
}