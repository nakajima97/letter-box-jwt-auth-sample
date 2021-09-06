class UserInfosController < ApplicationController
  before_action :authenticate_user!, only: [show]

  def show
    render json: {
      name: "山田 太郎"
    }
  end
end
