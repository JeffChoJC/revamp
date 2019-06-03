class Api::RestaurantsController < ApplicationController
    def index
        @restaurants = Restaurant.all
    end

    def create
        @restaurant = Restaurants.new(restaurant_params)
        @restaurant.owner_id = current_user.id

        if @restaurant.save!
            render "api/restaurants/show"
        else
            render json: @restaurant.errors.full_messages, status: 422
        end
    end

    def update
        @restaurant = current_user.restuarants.find(params[:id])
        if @restaurant.update_attributes(restaurant_params)
            render "api/restaurants/show"
        else
            render json: @restaurant.errors.full_messages, status: 422
        end
    end

    private

    def restaurant_params
        params.require(:restaurant).permit(
            :name,
            :description,
            :phone_number,
            :cuisine,
            :address,
            :city,
            :state,
            :zipcode,
            :owner_id)
    end
end