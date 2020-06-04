class AddIndexToMyListItems < ActiveRecord::Migration[5.2]
  def change
    add_index :my_list_items, :video_id
    add_index :my_list_items, :user_id
  end
end
