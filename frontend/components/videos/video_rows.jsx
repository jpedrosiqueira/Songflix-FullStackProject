import React from "react";
import VideoItemContainer from "./video_item_container";

class VideoRows extends React.Component {

    render() {

        const { videos } = this.props;
        
        let allRock;
        let allAlternative;
        let allPop;

        allRock = videos.map((video, key) => {
            if (video.genre === "rock") {
                return <VideoItemContainer className="video-hover" video={video} key={key} />
            }
        })

        allAlternative = videos.map((video, key) => {
            if (video.genre === "alternative" && video.title !== "The less I know the better") {
                return <VideoItemContainer className="video-hover" video={video} key={key} />
            }
        })

        allPop = videos.map((video, key) => {
            if (video.genre === "pop") {
                return <VideoItemContainer className="video-hover" video={video} key={key} />
            }
        })

        return (
            <div className="row-videos">
                {/* Rows for each genre */}

                <div className="genre-title-row">
                    <br></br>
                            Rock
                </div>
                <div className="row-rock-videos">
                    {allRock}
                </div>
                <div className="genre-title-row">
                    <br></br>
                            Alternative
                </div>
                <div className="row-alternative-videos">
                    {allAlternative}
                </div>
                <div className="genre-title-row">
                    <br></br>
                            Pop
                </div>
                <div className="row-pop-videos">
                    {allPop}
                </div>

            </div>
        )

    }


}

export default VideoRows;