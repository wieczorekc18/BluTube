json.array! @videos do |video|
    json.extract! video, :id, :title, :description, :views, :created_at, :uploader
    json.thumb url_for(video.thumbnail)
end 
