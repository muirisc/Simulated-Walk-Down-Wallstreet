class UserStockSerializer < ActiveModel::Serializer
  attributes :stock_count, :id
  belongs_to :stock


end
