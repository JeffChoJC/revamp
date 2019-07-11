class ChangeDateTimeUnique < ActiveRecord::Migration[5.2]
  def change
    remove_index :reservations, [:date, :time]
    add_index :reservations, [:restaurant_id, :date, :time]
  end
end
