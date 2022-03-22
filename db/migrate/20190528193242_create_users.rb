class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :phone_number
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.datetime :created_at
      t.datetime :updated_at
    end
    add_index :users, :email, unique: true
    add_index :users, :fname
    add_index :users, :lname
    add_index :users, :phone_number, unique: true
    add_index :users, :session_token, unique: true
  end
end
