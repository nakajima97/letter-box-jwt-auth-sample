class UserInfosController < ApplicationController
  def show
    if user_auth_signed_in?
      render json: {
        name: current_user_auth.user_info.name
      }
    else
      render json: {
        name: "ログインして 太郎"
    }
    end
  end
end
