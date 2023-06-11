import React,{useState,useEffect} from "react";
import axios from "axios";

const SearchVideo = ({addVideo, addSelectedVideo}) => {
  let [search,setSearch] = useState("React Videos");
  
  useEffect(() => {
    findVideos()
},[])

  function findVideos(e){
    if(e){
      e.preventDefault();
    }
     axios.get("https://www.googleapis.com/youtube/v3/search", {
          params:{
              q: search,
              part: "snippet",
              maxResults: 5,
              type: "video",
              key: "AIzaSyDM4FrBGk1qwXox2zQdYyoFPn2soWviVWY"
          }
     })
        .then(res => {
            addVideo(res.data.items)
            addSelectedVideo(res.data.items[0])
        })
        .catch(err => console.log(err))
}

    return(
        <div className="search">
                    <form>
                        <input type="text" placeholder="Search" 
                         value={search} onChange={e => setSearch(e.target.value)}
                        />
                        <button type="submit"
                        onClick={findVideos}
                        >Search</button>
                    </form>
              </div>
    )
}

export default SearchVideo;