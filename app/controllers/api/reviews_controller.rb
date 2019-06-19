class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        if @review.save!
            render "api/reviews/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(
            :food_rating,
            :service_rating,
            :ambience_rating,
            :value_rating,
            :noise_level,
            :author_id,
            :restaurant_id
        )
    end
end