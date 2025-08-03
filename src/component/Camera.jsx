import { DisplaySize } from "../constants/video";
import "../styles/camera.css";

const Camera = ({ videoRef, canvasRef }) => {
  return (
    <div className="camera-area">
      <p className="camera-title">Camera</p>
      <div style={{ position: "relative", display: "inline-block" }}>
        <video
          ref={videoRef}
          style={{ display: "none" }}
          autoPlay
          playsInline
          muted
        />
        <canvas
          className="canvas"
          ref={canvasRef}
          width={DisplaySize.width}
          height={DisplaySize.height}
        />
      </div>
    </div>
  );
};

export default Camera;
