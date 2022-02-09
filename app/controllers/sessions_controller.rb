class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: "Invalid Credentials", status: :unauthorized
    end
  end
  # def login
  #   user = User.find_by(username: params[:username])
  #   # if user.authenticate(params[:password])
  #   if user
  #     session[:user_id] = user.id
  #     render json: user, status: :ok
  #   else
  #     render json: {error: "Auth cred not valid"}, status: :unauthorized
  #   end
  # end

  def logout
    sessions.delete :user_id
  end
end
