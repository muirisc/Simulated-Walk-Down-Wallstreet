class StockSerializer < ActiveModel::Serializer
  attributes :id, :name, :industry, :cap, :img, :price
end
