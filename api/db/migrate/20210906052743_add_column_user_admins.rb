class AddColumnUserAdmins < ActiveRecord::Migration[6.1]
  def change
    add_column :user_admins, :jti, :string, null: false
    add_index :user_admins, :jti, unique: true
  end
end
