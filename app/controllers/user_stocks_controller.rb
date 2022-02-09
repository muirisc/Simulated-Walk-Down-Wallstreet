class UserStocksController < ApplicationController

  def index
    user_stocks = UserStock.all 
    render json: user_stocks
  end

  def show
    user_stock = UserStock.find_by(id:params[:id])
    if user_stock
      render json: user_stock 
    else
      render json: {errors: "Stock not found"}, status: :not_found
    end
  end

  def create 
    user_stock = UserStock.new(user_stock_params)
    if user_stock.save
      render json: user_stock, status: :created
    else
      render json: {errors: user_stock.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    user_stock = UserStock.find(params[:id])
    user_stock.update!(user_update_params)
    render json: user_stock
  end

  def destroy
    stock = UserStock.find_by_id(params[:id])
    if stock
    stock.destroy
    head :no_content 
    end
  end


  


  private 

  def user_stock_params
    params.permit(:stock_count, :user_id, :stock_id)
  end

  def user_update_params
    params.permit(:stock_count)
  end
  
end
