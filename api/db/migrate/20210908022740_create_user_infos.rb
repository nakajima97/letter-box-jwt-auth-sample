class CreateUserInfos < ActiveRecord::Migration[6.1]
  def change
    create_table :user_infos do |t|
      t.string :name
      t.references :user_auth, null: false, foreign_key: true

      t.timestamps
    end
  end
end
