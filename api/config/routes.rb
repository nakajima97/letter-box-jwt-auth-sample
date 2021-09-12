Rails.application.routes.draw do
  devise_for :user_auths, path: '/user', 
  path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registrations: 'registrations'
  },
  controllers: {
    sessions: 'user_auths/sessions',
    registrations: 'user_auths/registrations'
  }
  get '/user/show/:id', to: 'user_infos#show'
end
