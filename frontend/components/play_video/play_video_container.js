import { connect } from 'react-redux';
import { requestVideo } from '../../actions/video_actions' // action creator
import PlayVideo from './play_video'; // presentational component to connect

const mapStateToProps = (state, ownProps) => { // map slice of state to props object
    return ({
        video: state.entities.videos[ownProps.match.params.videoId]
    })
};

const mapDispatchToProps = (dispatch) => ({ // create action dispatcher
    requestVideo: (videoId) => dispatch(requestVideo(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayVideo);
