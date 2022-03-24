class Api::CompaniesController < ApplicationController
    def create
        @company = Companies.new(company_params)

        if @company.save!
            render "api/companies/show"
        else
            render json: @company.errors.full_messages, status: 422
        end
    end
    
    def index
        if params[:keyword]
            @date = params[:date]
            @companies = Company.includes(:reviews, :reservations)
                .order(:name).search_by_keyword(params[:keyword])
        end
        
        unless @companies.length > 0
            @companies = Company.all.order(:name)
        end
    end

    def show
        @company = Company.includes(:reviews, :reservations, :favorites)
            .find_by(id: params[:id])
        if @company
            render "api/companies/show"
        else
            render json: ["Company unavailable"]
        end
    end
    
    private

    def company_params
        params.require(:company).permit(
            :name,
            :industry,
            :phone_number,
            :address,
            :city,
            :state,
            :zipcode,
            :owner_id
        )
    end
end