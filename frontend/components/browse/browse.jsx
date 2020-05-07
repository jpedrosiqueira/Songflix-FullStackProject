import React from "react";
import { Link } from "react-router-dom";


import GreetingContainer from "../greeting/greeting_container";
import VideoIndexContainer from "../videos/video_index_container"

class Browse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

    componentDidMount() {
        this.props.requestVideos();
    }

    handleSelected() {
        e => e.target.classList.add(" selected-nav")
    }

    onHoverPlay(e) {
        e.currentTarget.play();
    }

    onLeave(e) {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
    }


    render() {

        // if (this.props.videos.length === 0 || !this.props.videos) {
        //     return(<div></div>);
        // }
        // const randomVideo = this.props.videos[Object.keys(this.props.videos)[Math.floor(Math.random() * Object.keys(this.props.videos).length)]];
        // debugger
        return (
            <div>
                <header className="signup-header">
                    <GreetingContainer />
                </header>

                {/* <div className="home-show-display">
                    <video className="home-video" autoPlay width="100%" height="100%"
                         src={this.props.videos.music_video} type="video/mp4"></video>
                    <div className="random-video-title">
                        {this.props.videos.title}
                    </div>
                    <Link to={`/videos/${this.props.videos.id}`}>
                        <div className="play-button">Play</div>
                    </Link>
                </div> */}

                <div>
                    <VideoIndexContainer />
                </div>
                
            </div>
        )
    }
}

export default Browse;