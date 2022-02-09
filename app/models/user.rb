class User < ApplicationRecord

  has_secure_password

  has_many :user_stocks
  has_many :stocks, through: :user_stocks
  
validates :username, presence: true, uniqueness: true

  
end
