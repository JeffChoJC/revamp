class Api::FavoritesController < ApplicationController
    def create
        @favorite = Favorite.new(favorite_params)

        if @favorite.save!
            render 'api/favorites/show'
        end
    end

    def index
        @favorites = Favorite.where('user_id = ?', params[:userId])
    end

    def destroy
       @favorite = Favorite.find_by(id: params[:id])
       
       if @favorite.destroy!
            render 'api/favorites/show'
       end
    end

    private

    def favorite_params
        params.require(:favorite).permit(
            :company_id,
            :user_id
        )
    end
end