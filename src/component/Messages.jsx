import { useEffect, useState } from "react";
import { useTemplateStore } from "../store/templateStore";

import Morse from "./Morse";
import "../styles/messages.css";

const Messages = () => {
  const [menuList, setMenuList] = useState([]);
  const toBinaryString = (decimal) => decimal.toString(2).padStart(5, "0");
  const { templates } = useTemplateStore();

  useEffect(() => {
    if (templates.length !== 0) {
      const binaryList = Array.from({ length: 20 }, (_, i) =>
        toBinaryString(i + 1)
      );
      const menuObject = templates.map((template, index) => {
        return {
          code: binaryList[index],
          value: template,
        };
      });

      setMenuList(menuObject);
    }
  }, [templates]);

  return (
    <section className="message-area">
      <span className="message-title">Messages</span>
      <ul className="message-box">
        <div className="message-header">
          <div className="header-1">메시지</div>
          <div className="header-2">상태</div>
          <div className="header-3">모스코드</div>
        </div>
        {menuList.map((template, index) => (
          <li className="message-item" key={template.code}>
            <div className="message-usable">
              <span className="msg">{`${index + 1}. ${
                template.value.message
              }`}</span>
              <span
                className={`status-tag ${
                  template.value.status === "HIGH" ? "urgent" : "normal"
                }`}
              >
                {template.value.status === "HIGH" ? "긴급" : "일반"}
              </span>
            </div>

            <div className="message-code">
              <Morse binaryStr={template.code} size="small" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Messages;
