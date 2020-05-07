import React from "react";
import { Link } from "react-router-dom";

class PlayVideo extends React.Component {

    componentDidMount() {
        this.props.requestVideo(this.props.match.params.videoId);
    }


    render() {
        
        if (!this.props.video) {
            return (<div></div>)
        }

        return (
            <div className="show-video-page">
                <Link to="/browse">
                    <div className="back-to-browse">
                        <div className="back-to-browse-icon">
                            <i class="fa fa-arrow-left"></i>
                            <div className="back-to-browse-message">
                                Back to Browse
                            </div>
                        </div>
                    </div>
                </Link>
                <video className="selectedVideo" autoPlay={true} 
                        width="100%" height="100%" src={this.props.video.music_video} 
                        type="video/mp4" controls={true}>
                </video>
            </div>
        )
    }
}

export default PlayVideo;
