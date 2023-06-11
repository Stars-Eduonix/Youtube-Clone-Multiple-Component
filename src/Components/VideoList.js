import React from "react";


const VideoList = ({videos, addSelectedVideo}) => {


    return(
        <div className="videos-list"  > 
                        {
                     videos.map((video) => (
                                <div onClick={()=>addSelectedVideo(video)}>
                                    <img width="90%" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
                                </div>
                            ))
                        }
            </div>
    )
}

export default VideoList;