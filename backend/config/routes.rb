Rails.application.routes.draw do
  match '*all', to: 'application#preflight', via: [:options]
  mount_devise_token_auth_for 'User', at: 'api/auth'
  get 'current_user', to: 'application#current_user'
  resources :investments, :researches
  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end
end
