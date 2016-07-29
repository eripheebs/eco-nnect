Rails.application.routes.draw do
  match '*all', to: 'application#preflight', via: [:options]
  mount_devise_token_auth_for 'User', at: 'api/auth'
  resources :investments, :researches
end
