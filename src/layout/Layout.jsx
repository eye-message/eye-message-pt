import React, { useState } from "react";

import Messages from "../component/Messages";
import Feed from "../component/Feed";
import TopNavbar from "../component/TopNavbar";
import Status from "../component/Status";
import Toast from "../component/Toast";
import VideoWrapper from "../component/VideoWrapper";

import "../styles/layout.css";
import MessageWrapper from "./MessageWrapper";

const Layout = () => {
  const [messages, setMessages] = useState([]); // 사용자 입력 부호와 일치하는 메세지
  const [pipeStatus, setPipeStatus] = useState({
    isLoading: true,
    error: null,
  });
  return (
    <div className="container">
      <TopNavbar />
      <div className="content-area">
        <div className="left-area">
          <MessageWrapper />
        </div>
        <div className="right-area">
          <VideoWrapper
            setMessages={setMessages}
            setPipeStatus={setPipeStatus}
          />
          <Status messages={messages} />
        </div>
      </div>
      <Toast
        error={pipeStatus.error}
        isLoading={pipeStatus.isLoading}
        onReload={() => window.location.reload()}
      />
    </div>
  );
};

export default Layout;
