import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const VideoPlayContainer = () => {
  const [searchParams] = useSearchParams()
  const vId = searchParams.get('v')
  
  return (
    <div className="w-full flex">
      <div className="p-5 w-2/3">
        <iframe
          className="w-full h-[36rem]"
          src={`https://www.youtube.com/embed/${vId}?si=Z3supNoabExRB0pw`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayContainer;
