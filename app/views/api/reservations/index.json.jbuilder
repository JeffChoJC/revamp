@reservations.each do |reservation|
    json.set! reservation.id do
        json.partial! 'api/reservations/reservation', reservation: reservation
        json.company reservation.company
    end
end