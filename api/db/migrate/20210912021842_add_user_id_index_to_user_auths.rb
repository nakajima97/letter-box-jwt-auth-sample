class AddUserIdIndexToUserAuths < ActiveRecord::Migration[6.1]
  def change
    add_index :user_auths, :user_id, unique: true
  end
end
