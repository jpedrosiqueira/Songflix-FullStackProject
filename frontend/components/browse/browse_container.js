import { connect } from "react-redux";
import Browse from "./browse";
import { requestVideos, requestVideo } from "../../actions/video_actions";

const mapStateToProps = (state) => ({
    videos: state.entities.videos
});

const mapDispatchToProps = dispatch => ({
    requestVideos: () => dispatch(requestVideos()),
    // requestVideo: (videoId) => dispatch(requestVideo(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
