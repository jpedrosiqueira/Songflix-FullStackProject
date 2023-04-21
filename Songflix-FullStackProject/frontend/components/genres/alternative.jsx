import React from "react";
import { Link } from "react-router-dom";

import NavBarContainer from "../navbar/navbar_container";
import VideoItemContainer from "../videos/video_item_container";



class Alternative extends React.Component {


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
                                Alternative
                    </div>
                        <div className="grid-container">
                            {videos.map((video, idx) => {
                                
                                if (video.genre === "alternative") {
                                return (
                                    <div key={idx}>
                                        <VideoItemContainer video={video} key={idx} />
                                    </div>
                                )
                            }})}
                        </div>
                </div>
        )
    }

}

export default Alternative;
