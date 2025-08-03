import React from "react";
import "../styles/confirm.css";
import Morse from "./Morse";

const Confirm = () => {
  return (
    <div className="confirm-menu">
      <div className="confirm-item">
        <Morse binaryStr={"11"} size="small" />
        <span>취소</span>
      </div>
      <div className="confirm-item">
        <Morse binaryStr={"00"} size="small" />
        <span>전송</span>
      </div>
    </div>
  );
};

export default Confirm;
