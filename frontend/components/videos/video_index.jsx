import React from "react";
import VideoMainContainer from "./video_main_container";
import VideoRowsContainer from "./video_rows_container";

class VideoIndex extends React.Component {
  componentDidMount() {
    this.props.requestVideos();
  }

  componentWillUnmount() {
    this.props.clearVideos();
  }
  render() {
    return (
      <div className="video-index-container">
        <VideoMainContainer />
        <VideoRowsContainer />
      </div>
    );
  }
}

export default VideoIndex;
