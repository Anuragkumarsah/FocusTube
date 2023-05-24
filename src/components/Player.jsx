import React from "react";
import ReactPlayer from "react-player";

function Player() {
  return (
    <div>
      <ReactPlayer
        url={"https://youtu.be/vtPkZShrvXQ"}
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
        }}
        controls={true}
        playing={true}
      />
    </div>
  );
}

export default Player;
