class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :cash, :quiz_taken, :turn
end
