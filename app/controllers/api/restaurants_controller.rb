class Api::RestaurantsController < ApplicationController
    def create
        @restaurant = Restaurants.new(restaurant_params)

        if @restaurant.save!
            render "api/restaurants/show"
        else
            render json: @restaurant.errors.full_messages, status: 422
        end
    end
    
    def index
        if params[:keyword]
            @date = params[:date]
            restaurants = Restaurant.includes(:reservations)
                .order(:name).search_by_keyword(params[:keyword])
            @restaurants = restaurants.each do |restaurant|
                reservations = restaurant.reservations.where(date: params[:date])
                openReservations = reservations.reject do |reservation|
                    reservation.time == params[:time]
                end

                availRestIds = openReservations.pluck(:restaurant_id)
                availRestaurants = availRestIds.map do |id|
                    restaurants.where(id: id)
                end
            end
        end
        
        unless @restaurants.length > 0
            @restaurants = Restaurant.all.order(:name)
        end
    end

    def show
        @restaurant = Restaurant.includes(:reviews, :reservations)
            .find_by(id: params[:id])
        if @restaurant
            render "api/restaurants/show"
        else
            render json: ["Restaurant unavailable"]
        end
    end
    
    private

    def restaurant_params
        params.require(:restaurant).permit(
            :name,
            :price_range,
            :description,
            :phone_number,
            :cuisine,
            :address,
            :city,
            :state,
            :zipcode,
            :owner_id
        )
    end
end