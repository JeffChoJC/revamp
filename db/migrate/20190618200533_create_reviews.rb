class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.decimal :overall_rating
      t.integer :service_rating, null: false
      t.integer :value_rating, null: false
      t.integer :efficiency_rating, null: false
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :company_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
    add_index :reviews, :author_id
    add_index :reviews, [:author_id, :company_id], unique: true
    add_index :reviews, :company_id
  end
end
