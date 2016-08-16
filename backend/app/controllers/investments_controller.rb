class InvestmentsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    render json: Investment.all
  end

  def create
    p "HIIIIII"
    p params
    user = current_user
    investment = user.investments.new(investment_params)
    render json:investment if investment.save
  end

  def show
    render json: Investment.find(params[:id])
  end

  def update
    investment = Investment.find(params[:id])
    if current_user.has_created?(investment)
      render json: investment.update(investment_params)
    else
      p "this isnt your invesment"
    end
  end

  def destroy
    investment = Investment.find(params[:id])
    if current_user.has_created?(investment)
      render json: investment.destroy
    else
    end
  end

  private

  def investment_params
    params.permit(:title, :industry, :description, :ngo)
  end
end
