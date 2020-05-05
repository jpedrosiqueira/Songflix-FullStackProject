class Video < ApplicationRecord

    validates :title, presence: true
    validates :year, presence: true
    validates :genre_id, presence: true, uniqueness: true
    validates :artist_id, presence: true, uniqueness: true

    belongs_to :artist,
    foreign_key: :artist_id.
    class_name: :Artist

    belongs_to :genre,
    foreign_key: :genre_id,
    class_name: :Genre

    has_many :my_list_items,
    foreign_key: :video_id,
    class_name: :MyListItem

    

end
