class Api::V1::UsersController < ApplicationController
    
    def index
        render json: UserSerializer.new(User.all)
    end
    
    def create
        user = User.new(strong_params)
        if user.save
            uuid = SecureRandom.uuid ## create randomized uuid for user
            user.uuid = uuid
            auth_token = create_token(user.uuid)
			render json: {auth_token: auth_token, uuid: user.uuid, id: user.id}
        else
            json_response "message": "sign up failed"
        end
    end

    def show
        user = User.find(params[:id])
        render json: UserSerializer.new(user)
    end

    def update
    end

    def following
        user = User.find(params[:id])
        render json: {following: user.following}
    end

    def followers
        user = User.find(params[:id])
        render json: {followers: user.followers}
    end 
    
    def hangouts
        user = User.find(params[:id])
        render json: {myHangouts: user.hangouts}
    end

    def created_hangouts
        user = User.find(params[:id])
        render json: {created_hangouts: user.created_hangouts}
    end

    
    def login
        user = User.find_by(username: params[:user][:username])
		if (!!user)
            if (user.authenticate(params[:user][:password]))
                auth_token = create_token(user.uuid)
				render json: {auth_token: auth_token, uuid: user.uuid, id: user.id}
			end
		else
			json_response "message": "login failed"
		end
    end
    
	def logout
		session[:user_id] = nil
		reset_session
		json_response "message": "logged out"
    end
    
    def verify_user
		unless session[:user_id] == params[:id]
			json_response "message": "not authorized"
		end
    end
     
    private
    
    def strong_params
        params.require(:user).permit(:username, :password)
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
