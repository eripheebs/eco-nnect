class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable
          # , :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :investments
  has_many :researches
end
