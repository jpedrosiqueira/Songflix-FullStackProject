class RemoveColumnFromVideo < ActiveRecord::Migration[5.2]
  def change
    remove_index :videos, :genre_id
    remove_index :videos, :artist_id
    remove_column :videos, :genre_id
    remove_column :videos, :artist_id
  end
end
