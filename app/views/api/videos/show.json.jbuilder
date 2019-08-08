json.extract! @video, :id, :title, :description, :created_at, :uploader, :views

json.comments do
    @video.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :author, :body, :created_at
        end
    end
end

#comments counter

total_likes = 0
total_value = 0


@video.likes.each do |like|
    total_likes += 1
    total_value += like.value
end

if total_value > 0
    json.videoDislikes = (total_likes - total_value)/2
    json.videoLikes = total_likes - json.dislikes 
elsif total_value < 0
    json.videoLikes = (total_likes - total_value)/2
    json.videoDislikes = total_likes - json.videoLikes
else 
    json.videoLikes = 0
    json.videoDislikes = 0
end


json.vid url_for(@video.video)