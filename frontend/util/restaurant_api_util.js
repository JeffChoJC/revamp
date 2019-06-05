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

export const searchRestaurants = keyword => {
    return $.ajax({
        method: "GET",
        url: "/api/restaurants",
        data: keyword
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