import React from "react";
import { Link } from "react-router-dom";
// import VideoIndexItem from './video_index_item';

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
    }


    render() {
        const { videos } = this.props;
        // debugger
        if (videos === undefined) {
            return null
        }

        return (
            <div>
                <ul>
                    
                    {videos.map((video, idx) => {
                        // <VideoIndexItem key={idx} video={video} />
                        if (video.id === 14) {
                            return (
                                <video className="selectedVideo" muted={false} width="100%" height="100%" 
                                    src={video.music_video} onMouseLeave={this.onLeave} onMouseOver={this.onHoverPlay}
                                    type="video/mp4" autoPlay></video>
                            )
                        } 

                        return (
                        <div key={idx}>
                            
                            <Link to={`/videos/${video.id}`}>
                                <video width="320" poster={video.thumbnail} height="240" muted={false} controls={false} 
                                    onMouseOver={this.onHoverPlay} onMouseLeave={this.onLeave} >
                                    <source src={video.music_video} type="video/mp4" />
                                </video>
                            </Link>
                            <h2>{video.title}</h2>
                            <h3>{video.year}</h3>
                        </div>
                        )
                    })}
                </ul>
            </div>
        )
    }

}

export default VideoIndex;
