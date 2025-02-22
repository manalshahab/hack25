import React from "react";
import { useNavigate } from "react-router-dom";
import "./opening.css";
import Logo from "./Logo.png"; // Update import path

const OpeningPage = () => {
  const navigate = useNavigate();

  return (
    <div className="opening-page">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="buttons">
        <button className="button" onClick={() => navigate("/signup")}>
          SIGN UP
        </button>
        <button className="button" onClick={() => navigate("/profile")}>
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default OpeningPage;