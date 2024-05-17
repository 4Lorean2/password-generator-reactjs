import React from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = () => {
  return (
    <div className="container">
      <h2 className="title">Super Password Generator</h2>
      <div className="password-wrapper">
        <div className="password-area">
          <div className="password">
            <input type="text" disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
