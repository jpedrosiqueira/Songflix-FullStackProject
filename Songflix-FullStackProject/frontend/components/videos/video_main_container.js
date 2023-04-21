import { connect } from 'react-redux';
import { requestVideos, clearVideos } from '../../actions/video_actions';
import VideoMain from './video_main';
import { addToMyList, removeFromMyList } from '../../actions/my_list_item_actions';


const mapStateToProps = (state) => {
    const users = state.entities.users
    const currentUserId = state.session.id
    const videoId = parseInt(Object.keys(state.entities.videos)[0])
    const onlist = users[currentUserId].listVideoIds.includes(videoId) ? true : false;

    return {
        videos: Object.values(state.entities.videos),
        videoId,
        onlist
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestVideos: () => dispatch(requestVideos()),
        clearVideos: () => dispatch(clearVideos()),
        addToMyList: (videoId) => dispatch(addToMyList(videoId)),
        removeFromMyList: (videoId) => dispatch(removeFromMyList(videoId))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoMain);