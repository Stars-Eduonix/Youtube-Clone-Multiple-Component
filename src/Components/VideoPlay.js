
import React from "react";

const VideoPlay = ({selectedVideo}) => {


    return(
        <div className="video-play">
                            { selectedVideo &&
                             <iframe width="560" height="315" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} />
                            }
        </div>
    )
}

export default VideoPlay;