class UserInfosController < ApplicationController
  def show
    if current_user_auth
      render json: {
        name: "山田 太郎"
      }
    else
      render json: {
        name: "ログインして 太郎"
    }
    end
  end
end
