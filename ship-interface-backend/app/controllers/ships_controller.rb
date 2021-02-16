require 'pry'

class ShipsController < ApplicationController
  before_action :set_ship, only: [:show, :update, :destroy]

  # GET /ships
  # def index
  #   @ships = Ship.all

  #   render json: @ships
  # end

  # GET /ships/1
  def show
    render json: @ship
  end

  # POST /ships
  # def create
  #   @ship = Ship.new(ship_params)

  #   if @ship.save
  #     render json: @ship, status: :created, location: @ship
  #   else
  #     render json: @ship.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /ships/1
  def update
    # binding.pry
    if @ship.update(ship_params)
      render json: @ship
    else
      render json: @ship.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ships/1
  # def destroy
  #   @ship.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ship
      @ship = Ship.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def ship_params
      params.require(:ship).permit(:hull, :nav, :weapons)
    end
end
