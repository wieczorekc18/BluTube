class Api::LikesController < ApplicationController
    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        else  
            render json: ['Cannot process upvote'], status: 422
        end
    end

    def update
        @like = current_user.likes.find[params[:id]]
        @like.value = -@like.value
        if @like.save 
            render :show 
        else  
            render json: ['Cannot process upvote'], status: 422
        end
    end

    def destroy
        @like = current_user.likes.find[params[:id]]
        if @like
            @like.destroy
        end
    end

    private

    def like_params
        params.require(:like).permit(:value, :likeable_id, :likeable_type)
    end
end