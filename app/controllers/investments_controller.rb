class InvestmentsController < ApplicationController
  
  def index 
    investments = Investment.all
    render json: investments
  end

  def show
    investment = Investment.find_by(id:params[:id])
    if investment
      render json: investment
    else 
      render json: {error: 'This investment was not found'}, status: :not_found
    end
  end

  def create 
    investment = Investment.new(investment_params)
    if investment.save
      render json: investment, status: :created
    else
      render json: {errors: investment.errors.full_messages}, status: :unprocessable_entity
    end
  end


  private

  def investment_params
    params.permit(:name, :cap, :img, :price, :industry)
  end
end
