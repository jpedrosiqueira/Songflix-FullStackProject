class MyListItem < ApplicationRecord

    validates :user_id, presence: true, uniqueness: true
    validates :video_id, presence: true, uniqueness: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video

end
