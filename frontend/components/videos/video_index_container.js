import { connect } from 'react-redux';
import { requestVideos, clearVideos } from '../../actions/video_actions' // action creator
import VideoIndex from './video_index'; // presentational component to connect

const mapStateToProps = (state) => { // map slice of state to props object
    return ({
    videos: Object.values(state.entities.videos)
})};

const mapDispatchToProps = (dispatch) => ({ // create action dispatcher
    requestVideos: () => dispatch(requestVideos()),
    clearVideos: () => dispatch(clearVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);

// ------ testing -------

// import { connect } from "react-redux";
// import VideoIndex from './video_index'; // presentational component to connect
// import { clearVideos, fetchMyListItems, requestVideos } from "../../actions/video_actions";
// import { addToMyList, removeFromMyList } from "../../actions/my_list_item_actions";

// const mapStateToProps = (state, ownProps) => {
//     const users = state.entities.users
//     const currentUserId = state.session.currentUser
//     const onlist = users[currentUserId].listVideoIds.includes(ownProps.video.id) ? true : false;

//     return {
//         users,
//         currentUserId,
//         videos: Object.values(state.entities.videos),
//         errors: state.errors.list,
//         onlist,
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         requestVideos: () => dispatch(requestVideos()),
//         fetchMyListItems: () => dispatch(fetchMyListItems()),
//         clearVideos: () => dispatch(clearVideos()),
//         addToMyList: (videoId) => dispatch(addToMyList(videoId)),
//         removeFromMyList: (videoId) => dispatch(removeFromMyList(videoId))
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex)