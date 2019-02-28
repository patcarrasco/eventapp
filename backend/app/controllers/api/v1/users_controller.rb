require_relative "../../../../helpers/Adapters.rb"

class Api::V1::UsersController < ApplicationController
    
    def index
        render json: UserSerializer.new(User.all)
    end
    
    def create
        # @user = User.new(strong_params)
        # uuid = SecureRandom.uuid ## create randomized uuid for user 
    end
    
    def login
        user = User.find_by(username: params[:username])
		if (!!user)
            if (user.authenticate(params[:password]))
                byebug
                user.client = Adapters::TicketmasterAdapter.new
                auth_token = create_token(user.uuid)
				render json: {auth_token: auth_token}
			end
		else
			session[:user_id] = nil
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
        params.require(:user).permit(:username)
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
