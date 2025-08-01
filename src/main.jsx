import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MediaPipe />} />
          <Route path="/chat-test" element={<Chat />} />
          <Route path="/mobile" element={<MobileChat />} />
        </Routes>
      </div>
    </Router>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
