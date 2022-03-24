class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.string :industry, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zipcode, null: false
      t.string :phone_number, null: false
      t.time :open_time
      t.time :close_time
      t.decimal :rating
      t.datetime :created_at
      t.datetime :updated_at
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :companies, :name, unique: true
    add_index :companies, :phone_number, unique: true
    add_index :companies, :address, unique: true
    add_index :companies, :industry
    add_index :companies, :city
    add_index :companies, :state
    add_index :companies, :zipcode
    add_index :companies, :owner_id
  end
end
