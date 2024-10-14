import React from "react";
import vid from "/vid.mp4"
const VideoPlayer = () => {
  return (
    <div className="flex justify-center mx-16 mt-12 items-center min-h-screen ">
      <video
        className="max-w-full  h-auto rounded-lg shadow-lg"
        autoPlay
        muted
        loop
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
