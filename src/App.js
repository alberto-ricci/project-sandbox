import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EsignatureApp from "./projects/01-e-signature-app/EsignatureApp";
import "./App.css";

function App() {
  const containerStyle = {
    padding: "40px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "900px",
    margin: "40px auto",
  };

  const headingStyle = {
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    color: "#555",
    textAlign: "justify",
    marginBottom: "30px",
    lineHeight: "1.6",
    fontSize: "1.1rem",
  };

  const linkStyle = {
    color: "#1a0dab",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
    color: "#4a148c",
  };

  const navStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    listStyle: "none",
    padding: 0,
    gap: "10px",
  };

  const listItemStyle = {
    marginBottom: "15px",
    flex: "1 0 18%",
    maxWidth: "180px",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    margin: "0 auto",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const applyHoverStyle = (e) => {
    e.target.style.textDecoration = "underline";
    e.target.style.color = "#4a148c";
  };

  const removeHoverStyle = (e) => {
    e.target.style.textDecoration = "none";
    e.target.style.color = "#1a0dab";
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={containerStyle}>
              <h1 style={headingStyle}>Project Sandbox</h1>
              <p style={paragraphStyle}>
                This is a collection of small React components that I have
                created based on the course{" "}
                <a
                  href="https://www.udemy.com/course/30-react-projects-learn-react-js-by-building-30-web-apps/"
                  style={linkStyle}
                  onMouseEnter={applyHoverStyle}
                  onMouseLeave={removeHoverStyle}
                >
                  "30+ React Projects, Learn React JS by Building 30+ Web Apps"
                </a>{" "}
                by{" "}
                <a
                  href="https://www.udemy.com/course/30-react-projects-learn-react-js-by-building-30-web-apps/#instructor-1"
                  style={linkStyle}
                  onMouseEnter={applyHoverStyle}
                  onMouseLeave={removeHoverStyle}
                >
                  Norbert B. Menyhart.
                </a>
              </p>
              <nav>
                <ul style={navStyle}>
                  <li style={listItemStyle}>
                    <Link to="/e-signature">
                      <button style={buttonStyle}>E-Signature App</button>
                    </Link>
                  </li>
                  {/* Add more links for other projects here */}
                </ul>
              </nav>
            </div>
          }
        />
        <Route path="/e-signature" element={<EsignatureApp />} />
        {/* Add more routes for other projects here */}
      </Routes>
    </Router>
  );
}

export default App;
