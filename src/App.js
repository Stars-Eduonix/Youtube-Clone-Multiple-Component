import React,{useState} from 'react';
import SearchVideo from './Components/SearchVideo';
import VideoList from './Components/VideoList';
import VideoPlay from './Components/VideoPlay';


const App = () =>{
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);


    return(
        <div>
               <SearchVideo  addVideo={setVideos} addSelectedVideo={setSelectedVideo}/> 
              <div className="video">
                    <VideoPlay selectedVideo={selectedVideo}/> 
                    <VideoList videos={videos}  addSelectedVideo={setSelectedVideo}/>
              </div>
              
              
        </div>
    )
}

export default App;