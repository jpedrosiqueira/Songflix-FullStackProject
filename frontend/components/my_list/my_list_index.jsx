import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import VideoIndexContainer from "../videos/video_index_container";

class MyListIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillUnmount() {
        this.props.clearVideos();
    }

    componentDidMount() {
        this.props.fetchMyListItems();
    }

    componentDidUpdate(prevProps) {
        let currentListVideoIds = this.props.users[this.props.currentUserId].listVideoIds;
        let prevListVideoIds = prevProps.users[this.props.currentUserId].listVideoIds;

        if (currentListVideoIds !== prevListVideoIds) {
            this.props.clearVideos();
            this.props.fetchMyListItems();
        }
    }

    render() {
        const { videos, errors } = this.props;

        let allVideos = videos.map((video, key) => {
            return <VideoIndexContainer video={video} key={key} />
        })

        return errors.length === 0 ? (
            <div>
                <header>
                    <NavBarContainer />
                </header>
                <div>
                    {allVideos}
                </div>
            </div>
        ) : (
            <div>
                <header>
                    <NavBarContainer />
                </header>
                <div>
                    No videos
                </div>
            </div>
        )


    }


}

export default MyListIndex;