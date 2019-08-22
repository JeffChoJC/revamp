json.partial! "api/reservations/reservation", reservation: @reservation
json.type @type
json.message ["Table reserved!", "Reservation updated!"]