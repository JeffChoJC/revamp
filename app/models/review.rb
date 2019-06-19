# == Schema Information
#
# Table name: reviews
#
#  id              :bigint           not null, primary key
#  overall_rating  :decimal(, )
#  food_rating     :integer          not null
#  service_rating  :integer          not null
#  ambience_rating :integer          not null
#  value_rating    :integer          not null
#  noise_level     :integer          not null
#  body            :text             not null
#  author_id       :integer          not null
#  restaurant_id   :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Review < ApplicationRecord
    after_initialize :overall_rating

    validates :food_rating,
        :service_rating,
        :ambience_rating,
        :value_rating,
        :noise_level,
        :body,
        presence: true

    validates :overall_rating,
        :food_rating,
        :service_rating,
        :ambience_rating,
        :value_rating,
        inclusion: { in: 1..5 }

    validates :author_id,
        uniqueness: { scope: :restaurant_id, message: "You have already reviewed this restaurant." }

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'User'

    belongs_to :restaurant

    def overall_rating
        @overall_rating = (self.food_rating +
            self.service_rating +
            self.ambience_rating +
            self.value_rating) / 4.0
    end

    RATING_VALUES = [1, 2, 3, 4, 5]
end
