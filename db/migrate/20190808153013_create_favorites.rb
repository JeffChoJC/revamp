class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :company_id, null: false
    end
    add_index :favorites, [:user_id, :company_id], unique: true
  end
end
