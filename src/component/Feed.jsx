import { useEffect, useRef } from "react";
import "../styles/feed.css";

const Feed = ({ messages }) => {
  const messageFeeds = useRef(null);

  useEffect(() => {
    if (messageFeeds.current) {
      messageFeeds.current.scrollTop = messageFeeds.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="feed-area">
      <p className="feed-title">Feed</p>
      <div className="feed-box">
        <div className="feed-box-inner" ref={messageFeeds}>
          {messages.map((msg, i) => (
            <div key={i} className="feed-message-wrapper">
              <div className="feed-message">
                <span className="feed-message-text">{msg.message}</span>
                <span
                  className={`feed-message-type ${
                    msg.type === "urgent" ? "urgent" : "normal"
                  }`}
                >
                  {msg.type === "urgent" ? "긴급" : "일반"}
                </span>
              </div>
              <span className="feed-message-time">{msg.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
