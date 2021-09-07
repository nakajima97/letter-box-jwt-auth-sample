Rails.application.routes.draw do
  devise_for :user_auths, path: '/user', 
  path_names: {
    sign_in: 'login',
    registrations: 'registrations'
  },
  controllers: {
    sessions: 'user_auths/sessions',
    registrations: 'user_auths/registrations'
  }
  # devise_for :user_admins, path: '/user', 
  # path_names: {
  #   sign_in: 'login',
  #   registrations: 'registrations'
  # },
  # controllers: {
  #   sessions: 'user_admins/sessions',
  #   registrations: 'user_admins/registrations'
  # }
  get '/user/show/:id', to: 'user_infos#show'
end
