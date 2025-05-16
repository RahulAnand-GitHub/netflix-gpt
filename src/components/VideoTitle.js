import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[46%] md:pt-[15%] px-10 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block md:py-6 text-lg w-1/4">
        {overview}
      </p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black py-2 md:py-4 px-3 md:px-12 text-lg md:text-xl rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden mx-2 backdrop-blur-sm bg-white/20 text-white p-4 px-8 text-xl rounded-lg hover:backdrop-blur-none hover:bg-white/50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
