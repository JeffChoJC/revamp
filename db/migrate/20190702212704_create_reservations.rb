class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.string :date, null: false
      t.string :time, null: false
      t.integer :company_id, null: false
      t.integer :user_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
    add_index :reservations, [:company_id, :user_id], unique: true
    add_index :reservations, [:company_id, :date, :time], unique: true
    add_index :reservations, :company_id
    add_index :reservations, :user_id
  end
end