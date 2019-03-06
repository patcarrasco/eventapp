class Api::V1::HangoutsController < ApplicationController

    def index
        @hangouts = Hangout.all
        render json: {hangouts: @hangouts}
    end

end
