class ChangeUniqueOnOwner < ActiveRecord::Migration[5.2]
  def change
    remove_index :restaurants, :owner_id
    add_index :restaurants, :owner_id
  end
end
