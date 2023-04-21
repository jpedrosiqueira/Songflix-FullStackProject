class RemoveIndexToMyListItems < ActiveRecord::Migration[5.2]
  def change
    remove_index :my_list_items, :video_id
    remove_index :my_list_items, :user_id
  end
end
