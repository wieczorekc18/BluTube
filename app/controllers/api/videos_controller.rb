class Api::VideosController < ApplicationController
    def index
        @videos = Video.all.includes(:uploader)
    end

    def show
        @video = Video.find(params[:id])
        @video.incrementViews
        # @likes = @video.calcLikes
        # @video = Video.includes(:likes, comments: :author).find(params[:id])
    end

    def create
        @video = Video.new(video_params)
        @video.uploader = current_user
        if @video.save
            render :show
        else  
            render json: @video.errors.full_messages, status: 422
        end
    end

    def search_results
        @search = params[:search]
        @videos = Video.where("lower(title) LIKE ?", "%#{@search.downcase}%")
        render :index
    end

    private

    def video_params
        params.require(:video).permit(:title, :description, :video, :thumbnail)
    end
end