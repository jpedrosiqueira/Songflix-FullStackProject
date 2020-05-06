import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import VideoIndexContainer from "../videos/video_index_container";

class Browse extends React.Component {
    

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