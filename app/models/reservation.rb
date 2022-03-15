# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  date          :string           not null
#  time          :string           not null
#  company_id    :integer          not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Reservation < ApplicationRecord
    belongs_to :company
    belongs_to :user

    validates :date, presence: true

    validates :time, uniqueness: { scope: [:date, :company_id] }
    validates :user_id, uniqueness: { scope: :company_id }
end
