Rails.application.routes.draw do
  get 'friends/index'
  get 'friends/destroy'
  resources :friend_requests
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :users, only: %i[index create show update delete]
      
      post "/login" => "users#login"
      post "/logout" => "users#logout"
      get "/users/:id/followers" => "users#followers"
      get "/users/:id/following" => "users#following"
      post "/users/:id/following" => "users#follow"

      # get user hangouts feed
      get '/users/:id/hangouts' => "users#hangouts"
      get '/users/:id/created_hangouts' => "users#created_hangouts"
    
      # add hangout to my hangouts
      post '/users/:id/hangouts' => "users#add_hangout"

      #user event actions
      get '/users/:id/events' => "users#events"
      post '/users/:id/events' => 'users#add_event'
      # delete '/users/:id/events/' => 'users#delete_event'
    

      resources :events, only: %i[index create update delete]
    
      post "/spotlight" => "events#spotlight"
      post "/events/by_location" => "events#by_location"
      
      get "/events/popular" => "events#popular"
      get "/events/recent" => "events#recent"
      get "/events/:genre" => "events#by_genre"

      get "/firebase" => "firebase#creds"

      resources :hangouts, only: %i[index create update]
    end
  end
end
