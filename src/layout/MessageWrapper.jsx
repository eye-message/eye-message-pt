// MessagesModule.jsx
import { useEffect, useState } from "react";
import axios from "axios";

import { API_URL } from "../constants/config";
import Messages from "../component/Messages";
import Feed from "../component/Feed";
import "../styles/messageWrapper.css";
import { useTemplateStore } from "../store/templateStore";

function MessageWrapper() {
  const [patientData, setPateintData] = useState({
    messageLog: [],
    templates: [],
  });

  useEffect(() => {
    console.log("MessageWrapper UseEffect Start");
    const controller = new AbortController();

    const fetchData = async () => {
      console.log("MessageWrapper CALL API Start");

      try {
        // axios 요청에 signal 추가
        // const res = await axios.get(`${API_URL}/api/v1/template/patient/list`, {
        const res = await axios.get(`${API_URL}/api/v1/patient`, {
          withCredentials: true,
        });

        console.log("MessageWrapper CALL API END");

        const result = res.data;
        console.log("MessageWrapper CALL API RESULT: ", result);

        useTemplateStore.getState().setTemplate(result.data.template);
        setPateintData({
          messageLog: result.data.messageLog,
          templates: result.data.template,
        });
      } catch (err) {
        if (err.name !== "CanceledError") {
          console.error("Error fetching data:", err);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return (
    <>
      <Messages />
      <Feed messages={patientData.messageLog} />
    </>
  );
}

export default MessageWrapper;
