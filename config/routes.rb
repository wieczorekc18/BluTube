Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'root#root'

  namespace :api, defaults: {format: :json} do
    resources :users

    resource :session, only: [:create, :destroy]

    resources :videos, only: [:index, :show, :create] do
      resources :comments, only: [:index, :new, :create, :show] do 
        resources :likes, only: [:create, :update, :destroy, :index]
      end
      resources :likes, only: [:create, :update, :destroy, :index]
    end

    get '/session/check_email', :to => 'sessions#check_email', :defaults => { :format => 'json' }
    get '/search_results', :to => 'videos#search_results', :defaults => { :format => 'json' }
  end

end
