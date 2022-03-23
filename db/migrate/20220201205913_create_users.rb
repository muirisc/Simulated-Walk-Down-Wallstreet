class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest

      t.float :cash 
      t.integer :turn
      t.boolean :quiz_taken
      t.timestamps
    end
  end
end
