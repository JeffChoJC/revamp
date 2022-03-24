class Api::ReservationsController < ApplicationController
    def index
        @reservations = Reservation.includes(:company).where("user_id = ?", params[:userId])
    end

    def create
        @reservation = Reservation.new(reservation_params)
        @type = "create"
        if @reservation.save
            render "api/reservations/show"
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def update
        @reservation = Reservation.find_by(id: params[:id])
        @type = "update"
        if @reservation.update(reservation_params)
            render "api/reservations/show"
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find_by(id: params[:id])
        if @reservation.destroy!
            render "api/reservations/show"
        else
            render json: ["Reservation does not exist."]
        end
    end

    private

    def reservation_params
        params.require(:reservation).permit(
            :date,
            :time,
            :party_size,
            :company_id,
            :user_id
        )
    end
end