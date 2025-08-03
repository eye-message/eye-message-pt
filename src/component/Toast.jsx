import React from "react";
import "../styles/toast.css";

const Toast = ({ error, isLoading, onReload }) => {
  if (!error && !isLoading) return null;

  return (
    <div
      className={`toast-box ${error ? "error" : ""} ${
        isLoading && !error ? "loading" : ""
      } show`}
    >
      {error && (
        <>
          <p>에러: {error}</p>
          <button onClick={onReload} className="button primary">
            페이지 새로고침
          </button>
        </>
      )}
      {isLoading && !error && (
        <p>MediaPipe 로딩 중... 카메라 권한을 허용해주세요.</p>
      )}
    </div>
  );
};

export default Toast;
