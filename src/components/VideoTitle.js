import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-scree aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className=" bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 backdrop-blur-sm bg-white/20 text-white p-4 px-8 text-xl rounded-lg hover:backdrop-blur-none hover:bg-white/50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
