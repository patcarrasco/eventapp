class Api::V1::VenuesController < ApplicationController

    def by_location
        client = EventService.new
        # byebug
        search_params = {
            latlong: params[:query][:latlong],
            size: 100, 
            radius: 20,
            unit: 'miles',
            sort: 'distance,asc',
        }
        data = client.get_venues(search_params)
        render json: {venues: data.data}
    end

    def by_id
        client = EventService.new
        search_params = {
            sort:'date,asc',
            includeTBA: 'no',
            includeTBD: 'no',
            venueId: strong_params[:id],
            radius: 20,
            unit: 'miles',
        }
        data = client.get_events(search_params)
        render json: {events: data.data}
    end

    private

    def strong_params
        params.require(:venue).permit(:id)
    end

end
