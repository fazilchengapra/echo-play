import React, { useEffect, useState } from "react";
import VideoCard from "./Vcard";

const VideoCardsContainer = () => {
  const [data, setData] = useState([])
  const fetchData = async() => {
    const res =await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=500&regionCode=IN&key=AIzaSyCUtB7MTsNkscmZrD-MuYUVPNYZHLfnGWo"
    );
    const json =await res.json()
    console.log(json)
    setData(json)
  };

  useEffect(() => {
    fetchData()
  },[])
  return (
    <div className="flex flex-wrap p-5 gap-5 h-screen overflow-y-auto !pb-24">
      {data?.items?.map(e => <VideoCard data={e}/>)}
    </div>
  );
};

export default VideoCardsContainer;
