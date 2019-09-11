class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :update, :destroy]

    def create
        @like = Like.new(like_params)
        @like.user_id = current_user.id
        # debugger
        if @like.save
            render :show
        else  
            render json: ['Cannot process upvote'], status: 422
        end
    end

    def index
        if(params[:likeable_type] == "Video")
            likeable = Video.find(params[:likeable_id])
        elsif(params[:likeable_type] == "Comment")
            likeable = Comment.find(params[:likeable_id])
        end
        @total_likes = likeable.likes.includes(:user).select do |like|
            if like.likeable_id == params[:likeable_id].to_i && like.likeable_type == params[:likeable_type]
                true
            else
                false 
            end
        end
        # debugger
    end

    def update
        @like = current_user.likes.find(params[:id])
        @like.value = -@like.value
        if @like.save 
            render :show
        else  
            render json: ['Cannot process upvote'], status: 422
        end

    end

    def destroy
        like = current_user.likes.find(params[:id])
        # debugger
        if like
            @id = like.id
            like.destroy
            # debugger
            render json: @id
        end
    end

    private

    def like_params
        params.require(:like).permit(:value, :likeable_id, :likeable_type)
    end
end