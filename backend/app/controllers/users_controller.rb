class UsersController < ApplicationController

    def index
        render json: UserSerializer.new(User.all)
    end

    def create
        # @user = User.new(strong_params)
    end

    private

    def strong_params
        params.require(:user).permit(:username)
    end

end
