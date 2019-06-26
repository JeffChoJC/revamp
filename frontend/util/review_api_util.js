export const createReview = review => {
    return $.ajax({
        method: "POST",
        url: `api/restaurants/${review.restaurant_id}/reviews`,
        data: { review }
    })
}

export const updateReview = review => {
    return $.ajax({
        method: "PATCH",
        url: `api/restaurants/${review.restaurant_id}/reviews/${review.id}`,
        data: { review }
    })
}

export const deleteReview = review => {
    return $.ajax({
        method: "DELETE",
        url: `api/restaurants/${review.restaurant_id}/reviews/${review.id}`,
    })
}