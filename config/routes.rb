Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :reservations, only: [:index, :show, :update, :destroy]
      resources :favorites, only: [:index, :create, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show, :create, :update] do
      resources :reservations, only: [:create]
      resources :reviews, only: [:index, :show, :create, :update, :destroy]
    end
  end

  root "static_pages#root"
end
