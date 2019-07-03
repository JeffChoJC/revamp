export const fetchRestaurant = id => {
    return $.ajax({
        method: "GET",
        url: `api/restaurants/${id}`
    })
}

export const searchRestaurants = keyword => {
    debugger
    return $.ajax({
        method: "GET",
        url: "/api/restaurants",
        data: keyword
    })
}