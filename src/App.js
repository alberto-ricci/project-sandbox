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
    textAlign: "center",
    marginBottom: "30px",
  };

  const navStyle = {
    textAlign: "center",
    listStyle: "none",
    padding: 0,
  };

  const listItemStyle = {
    marginBottom: "15px",
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

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#367c39",
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
                created and can be reused in bigger projects.
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
