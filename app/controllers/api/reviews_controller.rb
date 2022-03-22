class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        if @review.save!
            render "api/reviews/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.includes(:author).find_by(id: params[:id])
        if @review.update(review_params)
            render "api/reviews/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.destroy!
            render "api/reviews/show"
        else
            render json: ["Review does not exist."]
        end
    end

    private

    def review_params
        params.require(:review).permit(
            :service_rating,
            :value_rating,
            :efficiency_rating,
            :body,
            :author_id,
            :company_id
        )
    end
end