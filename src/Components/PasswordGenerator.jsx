import React from "react";
import "./PasswordGenerator.css";
import copyIcon from "../assets/copy-icon.svg";

const PasswordGenerator = () => {
  return (
    <div className="container">
      <h2 className="title">Super Password Generator</h2>
      <div className="password-wrapper">
        <div className="password-area">
          <div className="password">
            <input type="text" disabled />
            <img src={copyIcon} alt="tableicon" className="copyIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
