class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :description
      t.string :cuisine
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zipcode, null: false
      t.string :phone_number, null: false
      t.time :open_time
      t.time :close_time
      t.decimal :rating
      t.string :price_range
      t.datetime :created_at
      t.datetime :updated_at
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :restaurants, :name, unique: true
    add_index :restaurants, :phone_number, unique: true
    add_index :restaurants, :owner_id, unique: true
    add_index :restaurants, :cuisine
    add_index :restaurants, :address, unique: true
    add_index :restaurants, :city
    add_index :restaurants, :state
    add_index :restaurants, :zipcode
  end
end
