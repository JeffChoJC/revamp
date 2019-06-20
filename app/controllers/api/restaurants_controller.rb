class Api::RestaurantsController < ApplicationController
    def create
        @restaurant = Restaurants.new(restaurant_params)
        @restaurant.owner_id = current_user.id

        if @restaurant.save!
            render "api/restaurants/show"
        else
            render json: @restaurant.errors.full_messages, status: 422
        end
    end
    
    def index
        if params[:keyword]
            @restaurants = Restaurant.search_by_keyword(params[:keyword])
                .includes(:reviews) #, :reservations).order(:name)
        end
        
        unless @restaurants.length > 0
            @restaurants = Restaurant.all
        end
    end

    def show
        @restaurant = Restaurant.includes(:reviews)
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