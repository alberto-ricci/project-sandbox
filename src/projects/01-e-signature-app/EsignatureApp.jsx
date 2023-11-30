import React, { useState } from "react";
import Title from "../components/Title";
import BackToMainPageButton from "../components/BackToMainPageButton";

export default function EsignatureApp() {
  const [name, setName] = useState("Your Signature");
  const [date, setDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    const rawDate = e.target.value;
    const formattedDate = rawDate.split("-").reverse().join("/");
    setDate(formattedDate);
  };

  const containerStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "40px auto",
    textAlign: "center",
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px solid #007bff",
    outline: "none",
    padding: "10px 5px",
    margin: "10px 0",
    width: "calc(50% - 20px)",
    boxSizing: "border-box",
  };

  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "40px",
  };

  const instructionStyle = {
    color: "#555",
    fontSize: "16px",
    lineHeight: "1.6",
  };

  const buttonContainerStyle = {
    textAlign: "center",
    marginTop: "20px",
  };

  return (
    <>
      <div style={containerStyle}>
        <Title classes={"title"} text={name} />
        <Title classes={"main-title mb-4"} text={date || "Select Date"} />
        <p style={instructionStyle}>
          Enter your signature in the text field and select a date from the date
          picker. The signature name will appear at the top and the selected
          date will be displayed below it in dd/mm/yyyy format.
        </p>
        <footer style={footerStyle}>
          <input type="date" style={inputStyle} onChange={handleDateChange} />
          <input
            type="text"
            placeholder="Enter Your Signature"
            value={name}
            style={inputStyle}
            onChange={handleNameChange}
          />
        </footer>
      </div>
      <div style={buttonContainerStyle}>
        <BackToMainPageButton />
      </div>
    </>
  );
}
