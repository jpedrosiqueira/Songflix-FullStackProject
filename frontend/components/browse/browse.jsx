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

        
        return (
            <div>
                <header className="signup-header">
                    <GreetingContainer />
                </header>

                <div>
                    <VideoIndexContainer />
                </div>
                
            </div>
        )
    }
}

export default Browse;