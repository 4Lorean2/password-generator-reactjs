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

      <div className="setting">
        <h3>Customize Your Password</h3>
        <div className="customize">
          <div className="checkboxes">
            <div className="left">
              <div className="checkbox-field">
                <input type="checkbox" name="lower" id="lower" />
                <label htmlFor="lower"> Include LowerCase(a-z) </label>
              </div>
              <div className="checkbox-field">
                <input type="checkbox" name="upper" id="upper" />
                <label htmlFor="upper"> Include UpperCase(A-Z) </label>
              </div>
            </div>
            <div className="right">
              <div className="checkbox-field">
                <input type="checkbox" name="numbers" id="numbers" />
                <label htmlFor="numbers"> Include Numbers(1-9) </label>
              </div>
              <div className="checkbox-field">
                <input type="checkbox" name="symbols" id="symbols" />
                <label htmlFor="symbols"> Include Symbols(&-#) </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
