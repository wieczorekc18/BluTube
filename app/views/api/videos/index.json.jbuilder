json.array! @videos do |video|
    json.extract! video, :id, :title, :views, :created_at, :uploader
    json.thumb url_for(video.thumbnail)
end 
