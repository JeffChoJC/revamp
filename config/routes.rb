Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :reservations, only: [:create, :index, :update, :destroy]
    resources :favorites, only: [:index, :create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show, :create, :update] do
      resources :reviews, only: [:create, :update, :destroy]
    end
  end

  root "static_pages#root"
end
