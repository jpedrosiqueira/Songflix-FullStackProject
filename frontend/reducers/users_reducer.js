import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_MY_LIST_ITEMS } from "../actions/my_list_item_actions";


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_MY_LIST_ITEMS:
            let newState = Object.assign({}, state);
            newState[Object.keys(newState)[0]].listVideoIds = action.videos.listVideoIds;
            return newState;
        default:
            return state;
    }
}

export default usersReducer;