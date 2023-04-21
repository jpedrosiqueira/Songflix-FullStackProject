class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.integer :genre_id, null: false
      t.integer :artist_id, null: false
      t.timestamps
    end
    add_index :videos, :genre_id, unique: true
    add_index :videos, :artist_id, unique: true
  end
end
