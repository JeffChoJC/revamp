# == Schema Information
#
# Table name: reviews
#
#  id                   :bigint           not null, primary key
#  overall_rating       :decimal(, )
#  service_rating       :integer          not null
#  value_rating         :integer          not null
#  efficiency_rating    :integer          not null
#  body                 :text             not null
#  author_id            :integer          not null
#  restaurant_id        :integer          not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

class Review < ApplicationRecord
    after_initialize :calculate_overall_rating

    validates :service_rating,
        :value_rating,
        :efficiency_rating,
        :body,
        presence: true

    validates :overall_rating,
        :service_rating,
        :value_rating,
        :efficiency_rating,
        inclusion: { in: 1..5 }

    validates :author_id,
        uniqueness: { scope: :company_id, message: "You have already reviewed this company." }

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'User'

    belongs_to :company

    def calculate_overall_rating
        self.overall_rating = (
            self.service_rating +
            self.value_rating +
            self.efficiency_rating
        ) / 4.0
    end

    RATING_VALUES = [1, 2, 3, 4, 5]
end
