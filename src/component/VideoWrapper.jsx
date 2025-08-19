import React, { useRef, useState } from "react";
import Camera from "./Camera";
import Signal from "./Signal";
const VideoWrapper = ({ setMessages, setPipeStatus }) => {
  const [currentMorse, setCurrentMorse] = useState(""); // 현재 입력중인 모스부호

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  return (
    <>
      <Camera videoRef={videoRef} canvasRef={canvasRef} />
      <Signal currentMorse={currentMorse} />
    </>
  );
};

export default VideoWrapper;
