class RemoveEmailIndexToUserAuths < ActiveRecord::Migration[6.1]
  def change
    remove_index :user_auths, :email
  end
end
