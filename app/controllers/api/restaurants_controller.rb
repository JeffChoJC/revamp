class RestaurantsController < ApplicationController
    def index
        @restaurants = Restaurant.all
    end

    def create
        @restaurant = current_user.restaurants.new(restaurant_params)

        if @restaurant.save!
            render "api/restaurants/show"
        else
            render json: @restaurant, status: :unprocessable_entity
        end
    end

    def update
        @restaurant = current_user.restuarants.find(params[:id])
        if @restaurant.update_attributes(restaurant_params)
            render "api/restaurants/show"
        else
            render json: @restaurant, status: :unprocessable_entity
        end
    end

    private

    def restaurant_params
        params.require(:restaurant).permit(
            :name,
            :description,
            :cuisine,
            :address,
            :city,
            :state,
            :zipcode,
            :owner_id)
    end
end