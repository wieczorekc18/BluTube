json.extract! @video, :id, :title, :description, :created_at, :uploader, :views

json.comments do
    @video.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :author, :body, :created_at
        end
    end
end

# json.vid url_for(@video.video)