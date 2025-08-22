import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./layout/Layout.jsx";
import MobileChat from "./component/MobileChat.jsx";

import "./styles/index.css";
import LoginPage from "./component/LoginPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<Layout />} />
        <Route path="/mobile" element={<MobileChat />} />
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
