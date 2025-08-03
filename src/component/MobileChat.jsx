import React, { useEffect, useState, useRef } from "react";
import "../styles/mobilechat.css";
import MESSAGES from "../constants/mockMessage";
// import SockJS from "sockjs-client";
// import { Client } from "@stomp/stompjs";

// const SUB_ENDPOINT = "/topic/public";

const MobileChat = () => {
  const [messages, setMessages] = useState(Object.values(MESSAGES));
  const client = useRef(null);
  const listRef = useRef(null);

  // useEffect(() => {
  //   const stompClient = new Client({
  //     webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
  //     reconnectDelay: 5000,
  //     heartbeatIncoming: 4000,
  //     heartbeatOutgoing: 4000,
  //     onConnect: () => {
  //       console.log("Receiver Connected!");
  //       stompClient.subscribe(SUB_ENDPOINT, message => {
  //         const receivedMessage = JSON.parse(message.body);

  //         // 새 메시지를 상태에 추가 (기존 메시지 + 실시간 메시지)
  //         setMessages(prev => [...prev, receivedMessage]);
  //       });
  //     },
  //     onStompError: frame => {
  //       console.error("Error: " + frame.headers.message);
  //     },
  //   });

  //   client.current = stompClient;
  //   stompClient.activate();

  //   return () => {
  //     if (client.current) client.current.deactivate();
  //   };
  // }, []);

  // // 메시지 변경 시 스크롤 아래로 이동
  // useEffect(() => {
  //   if (listRef.current)
  //     listRef.current.scrollTop = listRef.current.scrollHeight;
  // }, [messages]);

  // 날짜별 그룹핑
  const group = messages.reduce((acc, ev) => {
    const timestamp =
      ev.timestamp || new Date().toISOString().slice(0, 19).replace("T", " ");
    const date = timestamp.split(" ")[0];
    (acc[date] = acc[date] || []).push({ ...ev, timestamp });
    return acc;
  }, {});
  const dates = Object.keys(group).sort((a, b) => (a < b ? -1 : 1));

  const toggleConfirm = id =>
    setMessages(prev =>
      prev.map(ev => (ev.id === id ? { ...ev, confirmed: !ev.confirmed } : ev))
    );

  return (
    <div className="mobile-wrapper">
      <div className="activity-wrapper">
        <ul className="activity-list" ref={listRef}>
          {dates.map(date => (
            <li key={date}>
              <div className="date-separator">{date}</div>
              {group[date].map(ev => (
                <div
                  key={ev.id || `${ev.timestamp}-${Math.random()}`}
                  className={`activity-item ${
                    ev.type === "urgent" ? "urgent" : ""
                  }`}
                >
                  <span className="activity-message">
                    {ev.message || ev.content}
                  </span>
                  <div className="activity-right">
                    {ev.confirmed ? (
                      <span className="confirmed-badge">확인함</span>
                    ) : (
                      <button
                        className="confirm-btn"
                        onClick={() => toggleConfirm(ev.id)}
                      >
                        확인
                      </button>
                    )}
                    <time className="activity-time">
                      {ev.timestamp.split(" ")[1]}
                    </time>
                  </div>
                </div>
              ))}
            </li>
          ))}
        </ul>

        <nav className="bottom-nav">
          <button className="nav-btn">📸</button>
          <button className="nav-btn">💬</button>
          <button className="nav-btn active">🔔</button>
          <button className="nav-btn">⚙️</button>
        </nav>
      </div>
    </div>
  );
};

export default MobileChat;
