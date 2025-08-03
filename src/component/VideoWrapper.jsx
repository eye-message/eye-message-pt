import React, { useRef, useState } from "react";
import Camera from "./Camera";
import Signal from "./Signal";
const VideoWrapper = ({ setMessages, setPipeStatus }) => {
  const [currentMorse, setCurrentMorse] = useState(""); // 현재 입력중인 모스부호

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  // 이곳에는 mideapipe 카메라 설정하는 부분과
  // 입력받은 시그널을 관리하는 부분

  return (
    <>
      <Camera videoRef={videoRef} canvasRef={canvasRef} />
      <Signal currentMorse={currentMorse} />
    </>
  );
};

export default VideoWrapper;
