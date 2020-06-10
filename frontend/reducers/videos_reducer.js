import { RECEIVE_VIDEOS, RECEIVE_VIDEO, RECEIVE_LIST_ERRORS, CLEAR_VIDEOS } from "../actions/video_actions";
import { RECEIVE_MY_LIST_ITEMS } from "../actions/my_list_item_actions";

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return Object.assign( {}, state, action.videos)
        case RECEIVE_VIDEO:
            return Object.assign( {}, state, { [action.video.id]: action.video })
        case RECEIVE_LIST_ERRORS:
            return {};
        // case RECEIVE_MY_LIST_ITEMS:
        //     let newState = Object.assign({}, state);
        //     // newState[Object.keys(newState)[0]].listVideoIds = action.videos.listVideoIds;
        //     for (let key in newState) {
        //         if (!action.videos.listVideoIds.includes(parseInt(key))) {
        //             delete newState[key];
        //         }
        //     }
        //     return newState;



        case CLEAR_VIDEOS:
            return {};
        default:
            return state;
    }
}

export default videosReducer;