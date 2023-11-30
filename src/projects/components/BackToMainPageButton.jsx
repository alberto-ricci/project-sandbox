import React from "react";
import { useNavigate } from "react-router-dom";

function BackToMainPageButton() {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    margin: "20px auto",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <button style={buttonStyle} onClick={() => navigate("/")}>
      Back to Main Page
    </button>
  );
}

export default BackToMainPageButton;
