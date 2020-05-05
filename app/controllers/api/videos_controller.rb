class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        render :index
    end

    private

    def video_params
        params.require(:video).permit(:year, :title)
    end


end
