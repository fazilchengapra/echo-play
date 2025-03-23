import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Description from "./Description";
import Comments from "./Comments";

const VideoPlayContainer = () => {
  const location = useLocation();
  const videoData = location.state.videoData;
  console.log(videoData);

  const [searchParams] = useSearchParams();
  const vId = searchParams.get("v");

  return (
    <div className="w-full flex h-screen overflow-y-auto p-0 m-0">
      <div className="p-5 w-3/5 h-full">
        <iframe
          className="w-full h-[30rem] max-h-[80vh]"
          src={`https://www.youtube.com/embed/${vId}?si=Z3supNoabExRB0pw`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <Description data={videoData} />
        <Comments id={videoData.id}/>
      </div>
    </div>
  );
};

export default VideoPlayContainer;
