import MESSAGES from "../constants/mockMessage";
import "../styles/Messages.css";
import Morse from "./Morse";

const Messages = () => {
  return (
    <section className="message-area">
      <span className="message-title">Messages</span>
      <ul className="message-box">
        <div className="message-header">
          <div className="header-1">메시지</div>
          <div className="header-2">상태</div>
          <div className="header-3">모스코드</div>
        </div>
        {Object.entries(MESSAGES).map(([code, data], index) => (
          <li className="message-item" key={code}>
            <div className="message-usable">
              <span className="msg">{`${index + 1}. ${data.message}`}</span>
              <span
                className={`status-tag ${
                  data.type === "urgent" ? "urgent" : "normal"
                }`}
              >
                {data.type === "urgent" ? "긴급" : "일반"}
              </span>
            </div>

            <div className="message-code">
              <Morse binaryStr={code} size="small" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Messages;
