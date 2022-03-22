export const createReview = review => {
    return $.ajax({
        method: "POST",
        url: `api/companies/${review.company_id}/reviews`,
        data: { review }
    })
}

export const updateReview = review => {
    return $.ajax({
        method: "PATCH",
        url: `api/companies/${review.company_id}/reviews/${review.id}`,
        data: { review }
    })
}

export const deleteReview = review => {
    return $.ajax({
        method: "DELETE",
        url: `api/companies/${review.company_id}/reviews/${review.id}`,
    })
}