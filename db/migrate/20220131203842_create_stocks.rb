class CreateStocks < ActiveRecord::Migration[6.1]
  def change
    create_table :stocks do |t|
      t.string :name
      t.string :cap
      t.string :industry
      t.string :img
      
      t.float :price
      t.float :market_cap

      t.timestamps
    end
  end
end
