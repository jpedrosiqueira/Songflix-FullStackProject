import React from "react";
import { Link } from "react-router-dom";

import NavBarContainer from "../navbar/navbar_container";
import VideoItemContainer from "../videos/video_item_container";


class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            search: ""
        }
    }

    updateSearch(e) {
        this.setState({search: e.target.value.substr(0, 20)})
    }

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
        let filteredVideos = videos.filter(video => {

            return (
                (video.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) || (video.artist.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
            )
        })
        if (filteredVideos.length === 0) {
            return (
                <div>
                    <header style={{ display: "flex" }}>
                        <NavBarContainer />
                        <div className="search">
                            <input
                                className="search-input"
                                type="text"
                                placeholder="search titles or artists"
                                value={this.state.search}
                                onChange={this.updateSearch.bind(this)}
                            />
                        </div>
                    </header>
                    <div className="error-message">Sorry, could not find any music videos that match.</div>
                </div>
            )
        } else {
        
        return (
            <div>
                <header style={{ display:"flex" }}>
                    <NavBarContainer />
                    <div className="search">
                        <input
                            className="search-input" 
                            type="text"
                            placeholder="search titles or artists"
                            value={this.state.search}
                            onChange={this.updateSearch.bind(this)}
                            />
                    </div>
                </header>
                <div className="grid-container-search">
                    {filteredVideos.map((video, idx) => {

                            return (
                                <div key={idx}>
                                    <VideoItemContainer video={video} key={idx} />
                                </div>
                            )
                    })}
                </div>

            </div>
            
        )
        }
    }


}

export default Search;