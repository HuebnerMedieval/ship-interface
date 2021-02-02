class CrewmatesController < ApplicationController
  before_action :set_crewmate, only: [:show, :update, :destroy]

  # GET /crewmates
  def index
    @crewmates = Crewmate.all

    render json: @crewmates
  end

  # GET /crewmates/1
  def show
    render json: @crewmate
  end

  # POST /crewmates
  def create
    @crewmate = Crewmate.new(crewmate_params)

    if @crewmate.save
      render json: @crewmate, status: :created, location: @crewmate
    else
      render json: @crewmate.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /crewmates/1
  def update
    if @crewmate.update(crewmate_params)
      render json: @crewmate
    else
      render json: @crewmate.errors, status: :unprocessable_entity
    end
  end

  # DELETE /crewmates/1
  def destroy
    @crewmate.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_crewmate
      @crewmate = Crewmate.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def crewmate_params
      params.require(:crewmate).permit(:name, :role, :status)
    end
end
