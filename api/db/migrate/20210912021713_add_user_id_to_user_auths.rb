class AddUserIdToUserAuths < ActiveRecord::Migration[6.1]
  def change
    add_column :user_auths, :user_id, :string, null: false, default: ""
  end
end
