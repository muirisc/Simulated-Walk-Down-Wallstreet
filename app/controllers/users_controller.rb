class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end
  
  def show
    user = User.find_by(id:params[:id])
    if user
      render json: user 
    else
      render json: {error: "User not found"}, status: :not_found
    end
  end

  def create 
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show 
    if current_user
      render json: current_user, status: :ok
    else
      render json: "No one logged in", status: :unauthorized
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  rescue ActiveRecord::RecordNotFound => error
    render json: {error: error.message}, status: :not_found
  end

  def update
    user = User.find(params[:id])
    if user
      user.update(update_params)
      render json: user
    else
      render json: {error: "user not found"}, status: :not_found
    end
  end

  private

  def user_params
    params.permit(:username, :password, :cash, :quiz_taken)
  end

  def update_params
    params.permit(:cash, :turn, :quiz_taken)
  end
end
