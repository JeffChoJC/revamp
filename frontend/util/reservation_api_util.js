export const createReservation = reservation => {
    return $.ajax({
        method: "POST",
        url: "/api/reservations",
        data: { reservation }
    })
}

export const editReservation = reservation => {
    return $.ajax({
        method: "PATCH",
        url: `/api/reservations/${ reservation.id }`,
        data: { reservation }
    })
}

export const fetchReservations = userId => {
    return $.ajax({
        method: "GET",
        url: "/api/reservations",
        data: { userId }
    })
}

export const cancelReservation = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/reservations/${id}`
    })
}