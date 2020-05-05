class Artist < ApplicationRecord

    validates :name, presence: true, uniqueness: true

    has_many :videos,
    foreign_key: :artist_id,
    class_name: :Video
    
end
