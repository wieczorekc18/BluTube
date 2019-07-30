class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, unique: true, null: false, index: true
      t.string :username, unique: true, null: false, index: true
      t.string :password_digest, null: false 
      t.string :session_token, null: false, index: true, unique: true

      t.timestamps
    end
  end
end
