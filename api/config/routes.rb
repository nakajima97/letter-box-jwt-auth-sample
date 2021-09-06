Rails.application.routes.draw do
  devise_for :user_admins, path: '/user', 
  path_names: {
    sign_in: 'login',
    registrations: 'registrations'
  },
  controllers: {
    sessions: 'user_admins/sessions',
    registrations: 'user_admins/registrations'
  }
end
