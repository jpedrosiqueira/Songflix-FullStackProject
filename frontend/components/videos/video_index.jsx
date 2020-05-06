import React from "react";
// import { Link } from "react-redux-dom";
// import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state = this.props.video
    // }

    componentDidMount() {
        this.props.requestVideos();
    }


    render() {
        const { videos } = this.props;
        if (videos === undefined) {
            return null
        }
        // debugger
        return (
            <div>
                <ul>
                    
                    {videos.map(video => {
                        return (
                            <li key={video.id}>
                                <h2>{video.title}</h2>
                                <h3>{video.year}</h3>
                                <img src={video.thumbnail} />
                                <video width="320" height="240" controls>
                                    <source src={video.music_video} type="video/mp4"/>                       
                                </video>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }

}

export default VideoIndex;
