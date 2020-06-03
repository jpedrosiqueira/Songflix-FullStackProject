import React from "react";
import { Link } from "react-router-dom";

import NavBarContainer from "../navbar/navbar_container";


class Pop extends React.Component {


    componentDidMount() {
        this.props.requestVideos();
    }

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


    render() {
        const { videos } = this.props;


        // debugger
        if (videos === undefined) {
            return null
        }


        return (
            <div>
                <header>
                    <NavBarContainer />
                </header>

                    <div className="genre-title">
                        <br></br>
                                Pop
                    </div>
                    <div className="grid-container">
                        {videos.map((video, idx) => {

                            if (video.genre === "pop") {
                                return (
                                    <div key={idx}>

                                        <Link to={`/videos/${video.id}`}>
                                            <video className="video-hover-catalog" poster={video.thumbnail} muted={false} controls={false}
                                                onMouseOver={this.onHoverPlay} onMouseLeave={this.onLeave} >
                                                <source src={video.music_video} type="video/mp4" />
                                            </video>
                                        </Link>
                                        <div className="video-info">
                                            <div className="video-info-separator">
                                                <div className="video-info-title">Song: <span className="video-info-value">{video.title}</span></div>
                                                <div className="video-info-title">Year: <span className="video-info-value">{video.year}</span></div>
                                            </div>
                                            <div className="video-info-title">Artist: <span className="video-info-value">{video.artist}</span></div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
        )
    }

}

export default Pop;
