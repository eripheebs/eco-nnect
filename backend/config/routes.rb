Rails.application.routes.draw do
  match '*all', to: 'application#preflight', via: [:options]
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :investments, :researches
  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
    get 'current_user', to: 'auth#current_user_please'
  end
end
