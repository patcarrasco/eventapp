class Api::V1::HangoutsController < ApplicationController

    def index
        @hangouts = Hangout.all
        render json: {hangouts: @hangouts.reverse}
    end

    def create
        @hangout = Hangout.new(strong_params)
        if @hangout.save
            render json: {created: true}
        else
            render json: {created: false}
        end
    end

    private

    def strong_params
        params.require(:hangout).permit(:name, :information, :user_id, :lat, :long, :date)
    end

end
