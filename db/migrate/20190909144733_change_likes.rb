class ChangeLikes < ActiveRecord::Migration[5.2]
  def change
    change_table :likes do |t|
      t.change :value, :integer, default: 0
    end
  end
end
