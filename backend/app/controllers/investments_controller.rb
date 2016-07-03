class InvestmentsController < ApplicationController
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

  private

  def investment_params
    params.require(:investment).permit(:industry, :description, :ngo)
  end

end