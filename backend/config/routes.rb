Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :users, only: %i[index create update delete]
      
      post "/login" => "users#login"
      post "/logout" => "users#logout"

      resources :events, only: %i[index create update delete]
    
      post "/spotlight" => "events#spotlight"
      post "/events/by_location" => "events#by_location"
      
      get "/events/popular" => "events#popular"
      get "/events/recent" => "events#recent"
      get "/events/:genre" => "events#by_genre"
    end
  end
end
