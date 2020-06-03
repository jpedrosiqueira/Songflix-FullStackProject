import { connect } from 'react-redux';
import { requestVideos } from '../../actions/video_actions' // action creator
import Rock from './rock'; // presentational component to connect

const mapStateToProps = (state) => { // map slice of state to props object
    return ({
        videos: Object.values(state.entities.videos)
    })
};

const mapDispatchToProps = (dispatch) => ({ // create action dispatcher
    requestVideos: () => dispatch(requestVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Rock);
