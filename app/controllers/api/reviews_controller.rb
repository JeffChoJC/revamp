class Api::ReviewsController < ApplicationController
    def create
        debugger
        @review = Review.new(review_params)
        if @review.save!
            render "api/reviews/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.includes(:author).find_by(id: params[id])
        if @review.update(review_params)
            render "api/reviews/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy

    end

    private

    def review_params
        params.require(:review).permit(
            :food_rating,
            :service_rating,
            :ambience_rating,
            :value_rating,
            :noise_level,
            :body,
            :author_id,
            :restaurant_id
        )
    end
end