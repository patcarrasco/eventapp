class Api::V1::UsersController < ApplicationController
    
    def index
        render json: UserSerializer.new(User.all)
    end
    
    def create
        user = User.new(strong_params)
        if user.save
            uuid = SecureRandom.uuid ## create randomized uuid for user
            user.uuid = uuid
            user.save
            auth_token = create_token(user.uuid)
			render json: {auth_token: auth_token, uuid: user.uuid, id: user.id}
        else
            render json: {"message": user.errors.full_messages}
        end
    end

    def show
        user = User.find(params[:id])
        render json: UserSerializer.new(user)
    end

    def following
        user = User.find(params[:id])
        render json: {following: user.following}
    end

    def followers
        user = User.find(params[:id])
        render json: {followers: user.followers}
    end 

    def follow
        user = User.find(params[:id])
        pending = User.find_by(uuid: params[:data][:uuid])
        user.following << pending
        if user.save
            render json: {status: 'success'}
        end
    end

    def add_hangout
        user = User.find(params[:id])
        pending = Hangout.find(params[:data][:hangout_id])
        user.hangouts << pending
        if user.save
            render json: {status: 'success'}
        end
    end
    
    def hangouts
        user = User.find(params[:id])
        render json: {myHangouts: user.hangouts}
    end

    def created_hangouts
        user = User.find(params[:id])
        render json: {created_hangouts: user.created_hangouts}
    end

    def events
        @user = User.find(params[:id])
        render json: {events: @user.events}
    end

    def add_event
        @event = Event.find_by("identifier": strong_params[:event_data][:id])
        @user = User.find(params[:id])
        
        res = @user.events.select {|event| event.identifier == strong_params[:event_data][:id]}
        
        if res.length > 0 
           render json: {status: 'FAILED: ALREADY IN LIST'}
           return
        end
        
        if @event
            @user.events << @event
            render json: {status: 'OK'}
        else
            @event = Event.new(
                identifier: strong_params[:event_data][:id], 
                name: strong_params[:event_data][:name],
                url: strong_params[:event_data][:url],
                date: strong_params[:event_data][:date]
            )
            if @event.save
                @user.events << @event
                render json: {status: 'OK: event not found, created new event with success'}
            end
        end
    end

    def delete_event
        @event = Event.find(strong_params[:event_data][:id])
        @user = User.find(params[:id])
        @ticket = Ticket.find_by event_id: @event.id, user_id: @user.id
        # byebug
        if @ticket
            @ticket.delete
            render json: {status: 'success'}
        end
    end
    
    def login
        user = User.find_by(username: params[:user][:username])
        # byebug
        if (!!user)
            if (user.authenticate(params[:user][:password]))
                auth_token = create_token(user.uuid)
				render json: {auth_token: auth_token, uuid: user.uuid, id: user.id}
            end
        else
            render json: {"message": "login failed"}
        end
    end
    
    # def logout
    #     render json: {"message": "logged out"}
    # end
    
    # def verify_user
	# 	unless session[:user_id] == params[:id]
	# 		json_response "message": "not authorized"
	# 	end
    # end
     
    private
    
    def strong_params
        params.require(:user).permit(:username, :password, event_data: [:name, :date, :url, :id])
    end

    def firebaseSecrets
        return Rails.application.credentials.firebase[:key]
    end

    def create_token(uid, is_premium = false)
        secret = OpenSSL::PKey::RSA.new firebaseSecrets[:private_key]
        now_seconds = Time.now.to_i
        payload = {
            "iss": firebaseSecrets[:client_email],
            "sub": firebaseSecrets[:client_email],
            "aud": "https://identitytoolkit.googleapis.com/google.identity.identitytoolkit.v1.IdentityToolkit",
            "iat": now_seconds,
            "exp": now_seconds + (60 * 60),
            "uid": uid,
            "claims": {premium_account: is_premium}
        }
        token = JWT.encode payload, secret, 'RS256'
        return token
    end

end
