class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            login!(@user)
            render 'api/users/show'
        else  
            render json: ['Wrong password. Try again.'], status: 422
        end
    end

    def check_email
        @email = params[:email][:email]
        user = User.find_by(email: @email)
        if user 
            render json: ['valid email']
        else  
            render json: ['Enter a valid email'], status: 422
        end
    end

    def destroy
        logout!
    end
end