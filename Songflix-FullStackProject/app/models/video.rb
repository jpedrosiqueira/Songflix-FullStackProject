class Video < ApplicationRecord

    validates :title, presence: true
    validates :year, presence: true
    validates :genre, presence: true
    validates :artist, presence: true

    # belongs_to :artist,
    # foreign_key: :artist_id,
    # class_name: :Artist

    # belongs_to :genre,
    # foreign_key: :genre_id,
    # class_name: :Genre

    has_many :my_list_items,
    foreign_key: :video_id,
    class_name: :MyListItem

    has_one_attached :music_video
    has_one_attached :thumbnail

end
