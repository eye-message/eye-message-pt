import "../styles/status.css";
import Morse from "./Morse";

const Status = ({ messages }) => {
  return (
    <div className="status-area">
      <p className="status-title">Status</p>
      <div className="status-box">
        <div className="status-contents">
          {messages.length > 0 ? (
            <div className="latest-message">
              <div className="latest-message-header">
                <span className="latest-label">최근 메시지</span>
                <span className="latest-time">
                  {messages[messages.length - 1].timestamp}
                </span>
              </div>
              <div className="latest-message-content">
                <h2 className="latest-text">
                  {messages[messages.length - 1].message}
                </h2>
                <span
                  className={`latest-status ${
                    messages[messages.length - 1].status === "긴급"
                      ? "urgent"
                      : "normal"
                  }`}
                >
                  {messages[messages.length - 1].status}
                </span>
              </div>
              <Morse
                binaryStr={messages[messages.length - 1].code}
                size="large"
              />
            </div>
          ) : (
            <div className="no-message">
              <p>일치하는 메시지가 없습니다</p>
              <span className="no-message-hint">
                눈 깜빡임으로 모스 부호를 입력해주세요
              </span>
            </div>
          )}
        </div>
        {/* <Confirm /> */}
      </div>
    </div>
  );
};

export default Status;
