import React from "react";
const VideoPlayer = () => {
  return (
    <div className="flex justify-center mx-[5vw] mt-12 items-center ">
      <video
        className="max-w-full  h-auto rounded-lg shadow-lg"
        autoPlay
        muted
        loop
      >
        <source src="https://res.cloudinary.com/dinfhdady/video/upload/v1732196707/ianpkkv7w6e28qrwehpc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
