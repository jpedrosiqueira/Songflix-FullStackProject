class Api::MyListItemsController < ApplicationController

    before_action :logged_in?

    def index
        @my_list_items = current_user.videos
        if @my_list_items
            render :index
        else
            render json: ["No videos added to your list yet"], status: 400
        end
    end

    def create
        my_list_item = MyListItem.new(user_id: current_user.id, video_id: params[:video_id])
        if my_list_item.save
            @my_list_items = current_user.videos
            render :index
        else
            render json: ["User already listed the video"], status: 400
        end
    end

    def destroy
        my_list_item = current_user.my_list_items.find_by(video_id: params[:id])
        if my_list_item
            my_list_item.destroy
            @my_list_items = current_user.videos
            render :index
        else
            render json: ["Invalid video"], status: 400
        end
    end

    
end
