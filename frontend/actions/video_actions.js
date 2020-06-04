import * as VideoAPIUtil from "../utils/video_api_util";

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";
export const CLEAR_VIDEOS = "CLEAR_VIDEOS";

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
});

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
});

const receiveListErrors = (errors) => ({
    type: RECEIVE_LIST_ERRORS,
    errors
});

export const clearVideos = () => ({
    type: CLEAR_VIDEOS
})

export const requestVideos = () => dispatch => (
    VideoAPIUtil.fetchVideos()
        .then(videos => dispatch(receiveVideos(videos)))
);

export const requestVideo = videoId => dispatch => (
    VideoAPIUtil.fetchVideo(videoId)
        .then(videoId => dispatch(receiveVideo(videoId)))
);

export const fetchMyListItems = () => (dispatch) => {
    return VideoAPIUtil.fetchMyListItems()
    .then(videos => {
        return dispatch(receiveVideos(videos))},
        )
};