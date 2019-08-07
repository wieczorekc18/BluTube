class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, index: true, null: false
      t.integer :value, null: false
      t.references :likeable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
