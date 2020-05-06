json.video do 
    json.extract! @video, :id, :title, :year
    json.thumbnail url_for(@video.thumbnail)
    json.music_video url_for(@video.music_video)
end