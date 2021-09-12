class RemoveEmailFromUserAuths < ActiveRecord::Migration[6.1]
  def change
    remove_column :user_auths, :email, :string
  end
end
