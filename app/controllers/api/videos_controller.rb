class Api::VideosController < ApplicationController
    def index
        @videos = Video.all.includes(:uploader)
    end

    def show
        @video = Video.includes(comments: :author).find(params[:id])
    end

    def create
        @video = Video.new(video_params)
        # debugger
        @video.uploader = current_user
        if @video.save
            render json: {message: 'success'}
        else  
            render json: @video.errors.full_messages, status: 422
        end
    end

    private

    def video_params
        params.require(:video).permit(:title, :description, :video, :thumbnail)
    end
end