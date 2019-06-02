class Restaurant < ApplicationRecord
    validates :name, :address, :city, :state, :zipcode, :phone_number, presence: true

    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: 'User'

    has_many :favorited,
        through: :favorites,
        source: :user

    has_many :reservations
    has_many :reviews

    def overall_rating
    end
end