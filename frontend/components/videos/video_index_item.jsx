import React from "react";

const VideoIndexItem = ({ video }) => {

        if (video.id === 3) {
            return (
            <video className="selectedVideo" muted width="100%" height="100%" src={video.music_video} type="video/mp4" autoPlay></video>
            )
        } 
        return (
        <li key={video.id}>
            <h2>{video.title}</h2>
            <h3>{video.year}</h3>
            {/* <img src={video.thumbnail} /> */}
            <video width="320" height="240" autoPlay muted controls onMouseOver>
            <source src={video.music_video} type="video/mp4" />
            </video>
            {/* <video className="selectedVideo" autoPlay={true} width="100%" height="100%" src={video.music_video} type="video/mp4" controls={true}></video> */}
        </li>
        )
        };

export default VideoIndexItem;