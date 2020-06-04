class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find_by(id: params[:id])
        render :show
    end

    def mylist
        @videos = current_user.videos
        .with_attached_thumbnail
        .with_attached_music_video

        if !@videos.empty?
            render :index
        else
            render json: ["User has no videos in their list"], status: 404
        end

    end

end
