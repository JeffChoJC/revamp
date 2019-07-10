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