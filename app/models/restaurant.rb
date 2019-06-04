class Restaurant < ApplicationRecord
    include PgSearch

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

    pg_search_scope :search_by_keyword, against: [
        :name,
        :cuisine,
        :address,
        :city,
        :zipcode]

    def open_time
        @open_time ||= "17:00:00"
    end

    def close_time
        @close_time ||= "22:00:00"
    end

    def generate_time_slots(open_time, close_time)
        @time_slots = []

        start_int = open_time[0..1].concat(open_time[3..4]).to_i
        finish_int = close_time[0..1].concat(close_time[3..4]).to_i

        until start_int == finish_int
            @time_slots.push(
                start_int.to_s[0..1]
                .concat(":#{start_int.to_s[2..3]}")
                .concat(":00"))

            start_int += 15
            if start_int.to_s[2..3] == "60"
                start_int += 40
            end
        end
    end

    def open_slots(restaurant)
        resDates = restaurant.reservations.pluck(:date)
        resTimes = restaurant.reservations.pluck(:time)

        @openings = @time_slots.reject do |slot|
            reservations.include?(slot)
        end
    end

    def overall_rating
        ratings = self.reviews.pluck(:overall_rating)
        ratings.sum / ratings.length
    end

    def food_rating
        ratings = self.reviews.pluck(:food_rating)
        ratings.sum / ratings.length
    end

     def service_rating
        ratings = self.reviews.pluck(:service_rating)
        ratings.sum / ratings.length
    end

     def ambience_rating
        ratings = self.reviews.pluck(:ambience_rating)
        ratings.sum / ratings.length
    end

     def value_rating
        ratings = self.reviews.pluck(:value_rating)
        ratings.sum / ratings.length
    end

     def noise_level
        ratings = self.reviews.pluck(:noise_level)
        ratings.sum / ratings.length
    end

    CUISINES = [
        "American",
        "Chinese",
        "French",
        "Greek",
        "Italian",
        "Indian",
        "Japanese",
        "Korean",
        "Mediterranean",
        "Mexican",
        "Soul",
        "Thai",
        "Turkish",
        "Vietnamese"
    ]

    CITIES = [
        ["New York", "NY"],
        ["Los Angeles", "CA"],
        ["Chicago", "IL"],
        ["Dallas", "TX"],
        ["San Fransisco", "CA"],
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