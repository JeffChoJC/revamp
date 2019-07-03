class AddCompositeIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :reservations, [:date, :time], unique: true
  end
end
