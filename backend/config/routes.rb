Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :users, only: %i[index create]
      post "/login" => "users#login"
      post "/logout" => "users#logout"
    end
  end
end
