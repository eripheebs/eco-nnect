class InvestmentsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    render json: Investment.all
  end

  def create
    investment = Investment.new(investment_params)
    render json:investment if investment.save
  end

  def show
    render json: Investment.find(params[:id])
  end

  def update
    investment = Investment.find(params[:id])
    render json: investment.update(investment_params)
  end

  def destroy
    investment = Investment.find(params[:id])
    render json: investment.destroy
  end

  private

  def investment_params
    params.require(:investment).permit(:industry, :description, :ngo)
  end
end
