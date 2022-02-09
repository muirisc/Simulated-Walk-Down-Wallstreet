class StocksController < ApplicationController
  def index 
    stocks = Stock.all
    render json: stocks
  end

  def show
    stock = Stock.find_by(id:params[:id])
    if stock
      render json: stock
    else 
      render json: {errors: 'This stock was not found'}, status: :not_found
    end
  end

  def create 
    stock = Stock.new(stock_params)
    if stock.save
      render json: stock, status: :created
    else
      render json: {errors: stock.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    stock = Stock.find(params[:id])
    if stock
      stock.update!(update_params)
      render json: stock
    end
  end



  private 
  def stock_params
    params.permit(:name, :cap, :img, :price, :market_cap, :industry)
  end

  def update_params
    params.permit(:price)
  end

end
