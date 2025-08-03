import { useState } from "react";
import "../styles/topNavbar.css";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="top-bar">
      <div className="top-bar-left">Eye Message</div>
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
};

export default TopNavbar;
