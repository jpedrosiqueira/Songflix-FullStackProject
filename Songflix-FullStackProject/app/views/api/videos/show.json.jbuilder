json.extract! @video, :id, :title, :year, :genre, :artist
json.thumbnail url_for(@video.thumbnail)
json.music_video url_for(@video.music_video)