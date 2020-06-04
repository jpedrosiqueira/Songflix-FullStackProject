import React from "react";
import { Link } from "react-router-dom";


import NavBarContainer from "../navbar/navbar_container";
import VideoIndexContainer from "../videos/video_index_container";
import TestVideoIndexContainer from "../videos/test_video_index_container";
import Footer from "../footer/footer";

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
                    <NavBarContainer />
                </header>

                <div>
                    <TestVideoIndexContainer />
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default Browse;