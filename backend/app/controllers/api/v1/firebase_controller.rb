class Api::V1::FirebaseController < ApplicationController

  def creds
    render json: {key: Rails.application.credentials.firebase[:config]}
  end


end
