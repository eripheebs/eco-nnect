class ResearchesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    render json: Research.all
  end

  def create
    user = current_user
    research = user.researches.new(research_params)
    render json:research if research.save
  end

  def show
    render json: Research.find(params[:id])
  end

  def update
    research = Research.find(params[:id])
    if current_user.has_created?(reasearch)
      render json: research.update(research_params)
    else
    end
  end

  def destroy
    research = Research.find(params[:id])
    if current_user.has_created?(reasearch)
      rrender json: research.destroy
    else
    end
  end

  private

  def research_params
    params.require(:research).permit(:topic, :description, :files)
  end

end
