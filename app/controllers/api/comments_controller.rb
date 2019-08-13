class Api::CommentsController < ApplicationController

    before_action :ensure_logged_in, only: [:new, :create]

    def new
        @comment = Comment.new(video_id: params[:video_id])
    end

    def index
        @comments = Comment.all.includes(:author).select do |comment|
            # comment.parent_comment_id.nil?
            comment.video_id == params[:video_id].to_i
            # comment.includes(:child_comments)
            # comment.includes(:author)
        end
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author = current_user 
        if @comment.save
            render :show
        else  
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def show
        @comment = Comment.find(params[:id])
        @comment.includes(:author)
        @comment.includes(:child_comments)
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :video_id, :parent_comment_id)
    end

end