class Api::V1::EventsController < ApplicationController
    
    def index
        @events = Event.all
        render json: {data: @events}
    end

    def create
        
    end

    def update
    end

    def delete
    end

    def spotlight
        # user = User.find_by uuid:params[:uuid]
        client = EventService.new
        search_params = {sort: 'relevance,desc', size: 6}
        data = client.get_events(search_params)
        render json: {events: data.data}
    end

    def by_location
        # user = User.find_by uuid:params[:uuid]
        client = EventService.new
        search_params = {
            latlong: params[:query][:latlong],
            classificationName: params[:query][:queryCat],
            startDateTime: params[:query][:startDate],
            endDateTime: params[:query][:endDate],
            size: 100, 
            sort:'date,asc',
            includeTBA: 'no',
            includeTBD: 'no',
            radius: 20,
            unit: 'miles',
        }
        data = client.get_events(search_params)
        render json: {events: data.data}
    end
         
    # def strong_params
    #     params.require(:event).permit(:name)
    # end


end
