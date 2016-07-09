Rails.application.routes.draw do
  get 'pages/index'
  root to: 'pages#index'

  mount_devise_token_auth_for 'User', at: 'api/auth'
  resources :investments
end
