class ChangeUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :icon_color, :string
    change_column :users, :username, :string, unique: false
  end
end
