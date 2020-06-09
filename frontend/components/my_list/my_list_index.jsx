import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import VideoItemContainer from "../videos/video_item_container";

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
        const { videos } = this.props;
        let allVideos = videos.map((video, key) => {
            return (
                <VideoItemContainer video={video} key={key} />
            )
        })

        return allVideos.length !== 0 ? (
            <div>
                <header>
                    <NavBarContainer />
                </header>
                <div className="genre-title">
                    <br></br>
                        My List
                </div>
                <div className="grid-container">
                    {allVideos}
                </div>
            </div>
        ) : (
            <div>
                <header>
                    <NavBarContainer />
                </header>
                <div className="genre-title">
                    <br></br>
                        My List
                </div>
                <div className="error-message">You haven't added any videos to your list yet.</div>
            </div>
        )


    }


}

export default MyListIndex;