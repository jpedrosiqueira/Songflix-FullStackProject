import React from "react";
import { Link } from "react-router-dom";

class VideoMain extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            muted: true
        }
        this.handleList = this.handleList.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    componentDidMount() {
        this.props.requestVideos();
    }

    // componentWillMount() {
    //     this.props.clearVideos();
    // }

    onHoverPlay(e) {
        e.currentTarget.play();
    }

    onLeave(e) {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
        e.currentTarget.load();
    }

    onLeaveMainVideo(e) {
        e.currentTarget.pause();
    }

    handleList(id) {

        const { onlist, addToMyList, removeFromMyList } = this.props;
        return (e) => {
            e.preventDefault();

            if (onlist) {
                removeFromMyList(id);
            } else {
                addToMyList(id);
            }
        }
    }

    toggleMute(e) {
        e.preventDefault();
        let videoEl = document.getElementsByClassName("main-video")[0];

        this.setState({
            muted: !this.state.muted
        });

        videoEl.muted = !videoEl.muted;
    }

    render() {
        const { videos, onlist } = this.props;
        const { muted } = this.state;

        const audio = muted ?
            (<button className="mute-button" onClick={this.toggleMute}>
                <i className="fas fa-volume-mute"></i>
            </button>) : (
                <button className="mute-button" onClick={this.toggleMute}>
                    <i className="fas fa-volume-up"></i>
                </button>
            )
        
        const listButton = onlist ? <i className="fas fa-check"></i> : <i className="fas fa-plus"></i>;

        const mainVideo = videos.map((video, idx) => {
            if (video.title === "The less I know the better") {
            return (
                <div className="main-video-box" key={idx}>
                    <div className="main-video" >
                        <Link to={`videos/${video.id}`}>
                            <video muted={false} width="100%" height="100%"
                                src={video.music_video} onMouseLeave={this.onLeaveMainVideo} onMouseOver={this.onHoverPlay}
                                type="video/mp4" autoPlay></video>
                            <button className="list-index-button" onClick={this.handleList(video.id)}>{listButton}</button>
                        </Link>
                    </div>
                </div>
                    )
                    }}
        )
        
        return (
            <div className="main-video-container">
                {audio}
                {mainVideo}
            </div>
        )

    }
}

export default VideoMain;