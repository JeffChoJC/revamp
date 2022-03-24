# == Schema Information
#
# Table name: companies
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  industry     :string
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zipcode      :string           not null
#  phone_number :string           not null
#  open_time    :time
#  close_time   :time
#  rating       :decimal(, )
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  owner_id     :integer          not null

class Company < ApplicationRecord
    include PgSearch

    validates :name, 
        :address,
        :city,
        :state,
        :zipcode,
        :phone_number,
        presence: true

    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: 'User'
        
    has_many :reservations
    has_many :reviews
    has_many :favorites
        
    has_many :favorited,
        through: :favorites,
        source: :user

    pg_search_scope :search_by_keyword, against: [
        :name,
        :industry,
        :address,
        :city,
        :state,
        :zipcode
    ]

    after_initialize :open_time, :close_time, #:generate_time_slots

    def open_time
        @open_time ||= "8:00:00"
    end

    def close_time
        @close_time ||= "19:00:00"
    end

    # def generate_time_slots
    #     @time_slots = []

    #     start_int = @open_time[0..1].concat(@open_time[3..4]).to_i
    #     finish_int = @close_time[0..1].concat(@close_time[3..4]).to_i

    #     until start_int == finish_int
    #         @time_slots.push(
    #             start_int.to_s[0..1]
    #             .concat(":#{start_int.to_s[2..3]}")
    #             .concat(":00"))

    #         start_int += 30
    #         if start_int.to_s[2..3] == "60"
    #             start_int += 40
    #         end
    #     end
    # end

    # def open_slots(date)
    #     existing_res = self.reservations.map do |reservation|
    #         reservation.time if reservation.date == date
    #     end

    #     @openings = @time_slots.reject do |slot|
    #         existing_res.include?(slot)
    #     end
    # end

    def overall_rating
        ratings = self.reviews.map do |review|
            review.overall_rating
        end
        
        self.rating = ratings.sum / ratings.length
    end

    def service_rating
        ratings = self.reviews.pluck(:service_rating)
        (ratings.sum * 100.0 / ratings.length).round / 100.0
    end

    def value_rating
        ratings = self.reviews.pluck(:value_rating)
        (ratings.sum * 100.0 / ratings.length).round / 100.0
    end

    def efficiency_rating
        ratings = self.reviews.pluck(:efficiency_rating)
        (ratings.sum * 100.0 / ratings.length).round / 100.0
    end

    CITIES = [
        ["New York", "NY"],
        ["Los Angeles", "CA"],
        ["Chicago", "IL"],
        ["Dallas", "TX"],
        ["San Francisco", "CA"],
        ["Seattle", "WA"],
        ["Miami", "FL"],
        ["Orlando", "FL"],
        ["Washington", "DC"],
        ["Las Vegas", "NV"],
        ["Boston", "MA"],
        ["Cleveland", "OH"],
        ["Atlanta", "GA"],
        ["Philadelphia", "PA"],
        ["Detroit", "MI"],
        ["Phoenix", "AZ"]
    ]
end
