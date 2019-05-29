class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full.messages, status: 422
        end
    end

    def update
        if logged_in?
            @user = current_user
            if @user.update_attributes(user_params)
                render "api/users/show"
            else
                render json: @user.errors.full.messages, status: 422
            end
        else
            render json: ["Please sign in"], status: 404
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :fname, :lname)
    end
end