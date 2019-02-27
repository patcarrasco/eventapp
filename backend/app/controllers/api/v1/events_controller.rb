class Api::V1::EventsController < ApplicationController
    
    def index
        render json: UserSerializer.new(User.all)
    end
    
    def create
    
    end

    def update
    end

    def delete
    end
     
    private
    
    # def strong_params
    #     params.require(:event).permit(:name)
    # end


   

end
