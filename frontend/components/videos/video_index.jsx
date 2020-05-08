import React from "react";
import { Link } from "react-router-dom";

class VideoIndex extends React.Component {


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
                <div className="main-video-box">     
                    {videos.map((video, idx) => {
                        // Main video that will be displayed
                        if (video.title === "The less I know the better") {
                            return (
                                <div className="main-video">
                                    <Link to={`videos/${video.id}`}>
                                        <video muted={false} width="100%" height="100%" 
                                            src={video.music_video} onMouseLeave={this.onLeaveMainVideo} onMouseOver={this.onHoverPlay}
                                            type="video/mp4" autoPlay></video>
                                    </Link>
                                </div>
                            )
                          }
                        })} 
                </div>
                <div className="row-videos">
                    {/* Rows for each genre */}
                   
                            <div className="genre-title">
                                <br></br>
                                Rock
                            </div>
                    <div className="row-rock-videos">
                    
                        {videos.map((video) => {
                        // Row for rock videos
                        if (video.genre === "rock") {
                            return (
                                <div>
                                    
                                    <Link to={`/videos/${video.id}`}>
                                        <video className="video-hover" width="360" poster={video.thumbnail} height="270" muted={false} controls={false} 
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

                    <div className="genre-title">
                        <br/>
                        Alternative
                    </div>
                    <div className="row-alternative-videos">

                        {videos.map((video, idx) => {
                        //  Row for alternative videos 
                        if (video.genre === "alternative" && video.title !== "The less I know the better") {
                            return (
                                <div>
                                    <Link to={`/videos/${video.id}`}>
                                        <video className="video-hover" width="400" poster={video.thumbnail} height="440" muted={false} controls={false} 
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
                    <div className="genre-title">
                        <br/>
                        Pop
                    </div>
                    <div className="row-pop-videos">

                        {videos.map((video, idx) => {
                        // Row for pop videos

                        if (video.genre === "pop") {
                            return (
                                <div>
                                    <Link to={`/videos/${video.id}`}>
                                        <video className="video-hover" width="500" poster={video.thumbnail} height="500" muted={false} controls={false} 
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
                         )}
                         
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default VideoIndex;
