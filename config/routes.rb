Rails.application.routes.draw do
  
  resources :user_stocks, only: [:index, :show, :update, :destroy]
  # get 'sessions/login'
  # get 'sessions/logout'
  resources :users, only: [:index,  :create, :update, :destroy]

  resources :stocks, only: [:index, :show, :update, :create]

  # delete "/user_stocks", to: "user_stocks#destroy"
  get "/stocks", to: "sesssions#index"
  get "/user_stock", to: "user_stocks#index"
  patch "/user_stock", to: "user_stocks#update"

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/user_stock", to:"user_stocks#create"
  delete '/logout', to: "sessions#logout"
  # patch '/user_stocks', to: "user_stocks#update"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
