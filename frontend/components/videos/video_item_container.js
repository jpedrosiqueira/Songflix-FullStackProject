import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import VideoItem from "./video_item";
import { clearVideos, fetchMyListItems } from "../../actions/video_actions";
import { addToMyList, removeFromMyList } from "../../actions/my_list_item_actions";

const mapStateToProps = (state, ownProps) => {
    const users = state.entities.users
    const currentUserId = state.session.id
    const onlist = users[currentUserId].listVideoIds.includes(ownProps.video.id) ? true : false;

    return {
        users,
        currentUserId,
        errors: state.errors.list,
        onlist,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMyListItems: () => dispatch(fetchMyListItems()),
        clearVideos: () => dispatch(clearVideos()),
        addToMyList: (videoId) => dispatch(addToMyList(videoId)),
        removeFromMyList: (videoId) => dispatch(removeFromMyList(videoId))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoItem));