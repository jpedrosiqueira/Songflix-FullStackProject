import * as MyListItemApiUtil from "../utils/my_list_item_api_util";

export const RECEIVE_MY_LIST_ITEMS = "RECEIVE_MY_LIST_ITEMS";

const receiveMyListItems = (videos) => {
    return {
        type: RECEIVE_MY_LIST_ITEMS,
        videos
    }
};

export const addToMyList = (videoId) => (dispatch) => {
    return MyListItemApiUtil.addToMyList(videoId)
    .then((videos) => dispatch(receiveMyListItems(videos)))
};

export const removeFromMyList = (videoId) => (dispatch) => {
    return MyListItemApiUtil.removeFromMyList(videoId)
    .then((videos) => {
        dispatch(receiveMyListItems(videos))
    })
};
