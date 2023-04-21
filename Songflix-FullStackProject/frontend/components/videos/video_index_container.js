import { connect } from 'react-redux';
import { requestVideos, clearVideos } from '../../actions/video_actions' // action creator
import VideoIndex from './video_index'; // presentational component to connect

const mapStateToProps = (state) => { // map slice of state to props object
    return ({
        videos: Object.values(state.entities.videos)
    })
};

const mapDispatchToProps = (dispatch) => ({ // create action dispatcher
    requestVideos: () => dispatch(requestVideos()),
    clearVideos: () => dispatch(clearVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);