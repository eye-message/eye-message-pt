import { useEffect, useRef } from "react";
import { useTemplateStore } from "../store/templateStore";

import "../styles/feed.css";

const Feed = ({ messageLogs }) => {
  const messageFeeds = useRef(null);

  const { templates } = useTemplateStore();
  useEffect(() => {
    if (messageFeeds.current) {
      messageFeeds.current.scrollTop = messageFeeds.current.scrollHeight;
    }
  }, []);

  return (
    <div className="feed-area">
      <p className="feed-title">Feed</p>
      <div className="feed-box">
        <div className="feed-box-inner" ref={messageFeeds}>
          {messageLogs &&
            messageLogs.map((msg, index) => {
              let template = {};

              for (let i = 0; i < templates.length; i++) {
                const targetTemplate = templates[i];

                if (targetTemplate.templateId === msg.templateId) {
                  template = { ...targetTemplate };
                }
              }

              const confirm = template.confirm === 0 ? "안읽음" : "읽음";

              return (
                <div key={index} className="feed-message-wrapper">
                  <div className="feed-message">
                    <span className="feed-message-text">
                      {template.message}
                    </span>
                    <span
                      className={`feed-message-type ${
                        template.status === "HIGH" ? "urgent" : "normal"
                      }`}
                    >
                      {template.status === "HIGH" ? "긴급" : "일반"}
                    </span>
                  </div>
                  <span className="feed-message-time">{`${msg.LocalDateTime} ${confirm}`}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
