Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :my_list_items, only: [:index, :create, :destroy]
    resources :videos, only: [:index, :show] do
      collection do
        get 'mylist'
      end
    end
  end

  root "static_pages#root"
end
