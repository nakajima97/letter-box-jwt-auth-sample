class AddColumnUserAuths < ActiveRecord::Migration[6.1]
  def change
    add_column :user_auths, :jti, :string, null: false
    add_index :user_auths, :jti, unique: true
  end
end
