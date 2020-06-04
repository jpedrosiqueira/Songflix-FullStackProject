import { RECEIVE_VIDEOS, RECEIVE_VIDEO, RECEIVE_LIST_ERRORS, CLEAR_VIDEOS } from "../actions/video_actions";

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return Object.assign( {}, state, action.videos)
        case RECEIVE_VIDEO:
            return Object.assign( {}, state, { [action.video.id]: action.video })
        case RECEIVE_LIST_ERRORS:
            return {};
        case CLEAR_VIDEOS:
            return {};
        default:
            return state;
    }
}

export default videosReducer;