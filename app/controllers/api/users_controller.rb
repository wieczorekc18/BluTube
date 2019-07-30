class Api::UsersController < ApplicationController
   before_action :ensure_current_user, only: [:update]
    
    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/videos/index'
        else  
            render json: @user.errors.full_messages, status: 401
        end
    end 

    def update
        @user = User.find(params[:id])
        render 'api/videos/index' unless current_user == @user
        if @user && @user.update!(user_params)
            render 'api/videos/index'
        elsif !@user  
            render json: {message: 'User not found'}, status: 400
        else  
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end





    private

    def user_params
        params.require(:user).permit(:username, :password)
    end

    def is_current_user?
        current_
    end


end