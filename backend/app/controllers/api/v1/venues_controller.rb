class Api::V1::VenuesController < ApplicationController

    def by_location
        client = EventService.new
        # byebug
        search_params = {
            latlong: params[:query][:latlong],
            size: 100, 
            radius: 20,
            unit: 'miles',
        }
        data = client.get_venues(search_params)
        render json: {venues: data.data}
    end

end
