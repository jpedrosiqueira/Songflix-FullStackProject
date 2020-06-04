import { connect } from "react-redux";
import MyListIndex from "./my_list_index";
import { fetchMyListItems, clearVideos } from "../../actions/video_actions";

const mapStateToProps = (state, ownProps) => {
    const users = state.entities.users
    const currentUserId = state.session.id

    return {
        users,
        currentUserId,
        videos: Object.values(state.entities.videos),
        errors: state.errors.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMyListItems: () => dispatch(fetchMyListItems()),
        clearVideos: () => dispatch(clearVideos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyListIndex)