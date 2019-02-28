class Api::V1::EventsController < ApplicationController
    
    def index
    end
    
    def create
    
    end

    def update
    end

    def delete
        render json:
    end

    def search
    end

    def get_events
        data = {page: params[:page_num], size:20, source: 'ticketmaster'}
        client = Ticketmaster.client(apikey: Rails.application.credentials.ticketmaster[:key])
        events = client.search_events(params: data)
    end

    def get_event_data
    end
     
    private
    
    # def strong_params
    #     params.require(:event).permit(:name)
    # end


   

end
