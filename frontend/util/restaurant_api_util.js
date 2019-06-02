export const fetchRestaurants = () => {
    return $.ajax({
        method: "GET",
        url: 'api/restaurants',
    })
}

export const fetchRestaurant = id => {
    return $.ajax({
        method: "GET",
        url: `api/restaurants/${id}`
    })
}

export const createRestaurant = restaurant => {
    return $.ajax({
        method: "POST",
        url: 'api/restaurants',
        data: { restaurant }
    })
}

export const updateRestaurant = restaurant => {
    return $.ajax({
        method: "PATCH",
        url: `api/restaurants/${restaurant.id}`,
        data: { restaurant }
    })
}

export const createReview = review => {
    return $.ajax({
        method: "POST",
        url: 'api/reviews',
        data: { review }
    })
}

export const updateReview = review => {
    return $.ajax({
        method: "PATCH",
        url: `api/reviews/${review.id}`,
        data: { review }
    })
}

export const deleteReview = id => {
    return $.ajax({
        method: "DELETE",
        url: `api/reviews/review/${id}`
    })
}