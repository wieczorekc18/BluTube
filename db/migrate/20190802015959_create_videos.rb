class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.integer :uploader_id, null: false, index: true
      t.string :title, null: false
      t.text :description
      t.time :length
      t.string :thumb_url
      t.integer :views, default: 0

      t.timestamps
    end
  end
end
