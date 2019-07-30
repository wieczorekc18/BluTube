class Api::SessionsController < ApplicationController
    def new
        
    end

    def create
        email = User.find_by_email(params[:user][:email])
        render json: {message: 'Invalid Email'} unless email
        @user = User.find_by_credentials(email, params[:user][:password])
        if @user 
            login!(@user)
        else  
            render json: {message: ''}
        end
    end

    def destroy
        logout!
        render 'api/videos/index'
    end
end