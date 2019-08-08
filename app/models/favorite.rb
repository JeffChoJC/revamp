# == Schema Information
#
# Table name: favorites
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#

class Favorite < ApplicationRecord
    belongs_to :user
    belongs_to :restaurant
end
