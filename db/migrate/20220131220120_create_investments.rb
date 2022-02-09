class CreateInvestments < ActiveRecord::Migration[6.1]
  def change
    create_table :investments do |t|
      t.string :name
      t.string :cap
      t.string :industry
      t.string :img
      
      t.float :price



      t.timestamps
    end
  end
end
