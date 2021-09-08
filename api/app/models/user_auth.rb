class UserAuth < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable,
          :registerable,
          :jwt_authenticatable,
          jwt_revocation_strategy: self

  has_one :user_info
  accepts_nested_attributes_for :user_info
end
