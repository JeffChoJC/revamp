class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    
    helper_method :current_user, :logged_in?

    private

    def current_user
        @current_user ||= User.find_by_session_token([session[:session_token]])
    end

    def ensure_logged_in
        render json: ['Please sign in.'], status: 403 unless logged_in?
    end

    def login(user)
        user.reset_token!
        session[:session_token] = user.session_token
        current_user = user
    end

    def logout
        current_user.reset_token!
        session[:session_token] = nil
        current_user = nil
    end

    def logged_in?
        !!current_user
    end
end
