require 'rails_helper'

describe 'UserAPI' do
  let!(:request_headers) { { 'Accept': 'application/json',
                            'Content-Type': 'application/json' } }

  describe 'POST /auth' do
    it 'creates a new user' do
      new_user = FactoryGirl.build(:user)
      opts = { 'name': new_user.name,
        'email': new_user.email,
        'password': new_user.password,
        'password_confirmation': new_user.password_confirmation
      }
      post '/auth',
           set_user_params(opts),
           request_headers

      expect(response.status).to eq 200
      expect(User.last.username).to eq new_user.username
      expect(User.last.email).to eq new_user.email
    end
  end
end
