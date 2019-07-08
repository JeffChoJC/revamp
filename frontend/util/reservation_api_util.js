export const createReservation = reservation => {
    return $.ajax({
        method: "POST",
        url: "api/reservations"
    })
}
