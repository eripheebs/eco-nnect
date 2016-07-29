class ResearchesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    render json: Research.all
  end

  def create
    investment = Research.new(investment_params)
    render json:research if research.save
  end

  def show
    render json: Research.find(params[:id])
  end

  def update
    research = Research.find(params[:id])
    render json: research.update(research_params)
  end

  def destroy
    research = Research.find(params[:id])
    render json: research.destroy
  end

  private

  def research_params
    params.require(:research).permit(:topic, :description, :files)
  end

end
