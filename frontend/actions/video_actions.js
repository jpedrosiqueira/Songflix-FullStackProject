import * as VideoAPIUtil from "../utils/video_api_util";

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
});

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
});

export const requestVideos = () => dispatch => (
    VideoAPIUtil.fetchVideos()
        .then(videos => dispatch(receiveVideos(videos)))
);

export const requestVideo = videoId => dispatch => (
    VideoAPIUtil.fetchVideo(videoId)
        .then(videoId => dispatch(receiveVideo(videoId)))
);