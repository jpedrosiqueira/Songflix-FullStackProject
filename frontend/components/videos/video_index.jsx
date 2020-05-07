import React from "react";
// import { Link } from "react-redux-dom";
import VideoIndexItem from './video_index_item';

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
                    
                    {videos.map((video, idx) => (
                        <VideoIndexItem key={idx} video={video} />
                    ))}
                </ul>
            </div>
        )
    }

}

export default VideoIndex;
