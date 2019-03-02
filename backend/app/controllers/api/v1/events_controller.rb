class Api::V1::EventsController < ApplicationController
    
    def create
    
    end

    def update
    end

    def delete
    end

    def spotlight
        user = User.find_by uuid:params[:uuid]
        client = EventService.new
        search_params = {sort: 'relevance,desc'}
        data = client.get_events(search_params)
        render json: {events: data.data}
    end

    def by_location
        user = User.find_by uuid:params[:uuid]
        client = EventService.new
        search_params = {city: params[:query]}
        data = client.get_events(search_params)
        render json: {events: data.data}
    end
         
    # def strong_params
    #     params.require(:event).permit(:name)
    # end


end
