class AddColumnsToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :genre, :string 
    add_column :videos, :artist, :string
  end
end
