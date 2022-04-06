json.partial! "api/reservations/reservation", reservation: @reservation
json.type @type
json.message ["Appointment made!", "Appointment updated!"]