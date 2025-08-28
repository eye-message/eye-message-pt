import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import "../styles/loginPage.css";
import axios from "axios";
import { API_URL } from "../constants/config";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    axios
      .post(
        `${API_URL}/api/v1/auth/patient/login`,
        {
          loginId: userId,
          password: pw,
        },
        {
          withCredentials: true,
        }
      )

      .then((res) => {
        const result = res.data;

        if (result.status !== 200) {
          console.error(
            `로그인에 실패했습니다. ${result.status} 에러: ${result.message}`
          );
        } else {
          useAuthStore.getState().setUser(result.auth);
          navigate("/main");
        }
      })
      .catch((err) => {
        console.error("환자 로그인 실패", err);
      });

    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1200);
  };

  return (
    <div className="container">
      <TopNavbar />
      <div className="content-area login-wrap">
        <div className="ambient"></div>
        <div className="login-card">
          <header className="login-header">
            <div className="logo-dot" aria-hidden="true" />
            <h1 className="login-title">로그인</h1>
            <p className="login-sub">따뜻한 보살핌을 기술로 연결합니다</p>
          </header>

          <form className="login-form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label className="label" htmlFor="loginId">
                환자 아이디
              </label>
              <div className="control">
                <input
                  id="loginId"
                  type="text"
                  className="input"
                  placeholder="name@example.com"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="password">
                비밀번호
              </label>
              <div className="control">
                <input
                  id="password"
                  type="password"
                  className="input"
                  placeholder="••••••••"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>

            <div className="form-meta">
              <label className="remember">
                <input type="checkbox" className="checkbox" />
                <span>로그인 상태 유지</span>
              </label>
              <a className="link" href="/forgot">
                비밀번호 찾기
              </a>
            </div>

            <button
              className="btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "로그인 중…" : "로그인"}
            </button>

            <div className="divider" role="separator" />
          </form>

          <footer className="login-foot">
            계정이 없으신가요?{" "}
            <a className="link" href="http://guardian.local">
              회원가입
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
