class Genre < ApplicationRecord

    validates :type, presence: true, uniqueness: true

    has_many :videos,
    foreign_key: :genre_id,
    class_name: :Video

    

end
