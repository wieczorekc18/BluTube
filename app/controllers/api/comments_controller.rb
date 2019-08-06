class Api::CommentsController < ApplicationController
    def new
        @comment = Comment.new
    end

    def index
        @comments = Comment.all.select do |comment|
            comment.parent_comment_id.nil?
            comment.video_id == params(:video_id)
            comment.includes(:child_comments)
            comment.includes(:author)
        end
    end

    def create

    end

    private

    def comment_params

    end

end