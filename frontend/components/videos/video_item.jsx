import React from "react";
import { Link } from "react-router-dom";

class VideoItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleList = this.handleList.bind(this);
    
    }

    handleList() {
        const { onlist, video, addToMyList, removeFromMyList } = this.props;

        return (e) => {
            e.preventDefault();

            if (onlist) {
                removeFromMyList(video.id);
                if (this.props.location.startsWith("/mylist")) {
                    this.props.location.push("/mylist");
                }

            } else {
                addToMyList(video.id)
            }

        }
    }

    render() {
        const { key, video, onlist } = this.props;
        const listButton = onlist ? <i className="fas fa-check"></i> : <i className="fas fa-plus"></i>;


        return (
            <div key={key}>

                <Link to={`/videos/${video.id}`}>
                    <video className="video-hover" width="360" poster={video.thumbnail} height="270" muted={false} controls={false}
                        onMouseOver={this.onHoverPlay} onMouseLeave={this.onLeave} >
                        <source src={video.music_video} type="video/mp4" />
                    </video>
                    <button className="list-index-button" onClick={this.handleList(video.id)}>{listButton}</button>
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
    

}

export default VideoItem;