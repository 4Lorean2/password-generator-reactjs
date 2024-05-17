import React, { useState } from "react";
import "./PasswordGenerator.css";
import copyIcon from "../assets/copy-icon.svg";

const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersList = "0123456789";
const symbolsList = "!@#$%^&*()?";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [passwordLenght, setPasswordLenght] = useState(8);

  const generatePassword = () => {
    let characterList = "";

    if (lowerCase) {
      characterList += lowercaseList;
    }
    if (upperCase) {
      characterList += uppercaseList;
    }
    if (numbers) {
      characterList += numbersList;
    }
    if (symbols) {
      characterList += symbolsList;
    }
    console.log(characterList);

    let tempPassword = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLenght; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      tempPassword += characterList.charAt(characterIndex);
    }
    setPassword(tempPassword);
  };

  const copyPassword = async () => {
    const copiedText = await navigator.clipboard.readText();

    if (copiedText) {
      navigator.clipboard.writeText(password);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Super Password Generator</h2>
      <div className="password-wrapper">
        <div className="password-area">
          <div className="password">
            <input
              type="text"
              value={password}
              disabled
              placeholder="Click on the Generate Password"
            />
            <img
              src={copyIcon}
              alt="tableicon"
              className="copyIcon"
              onClick={copyPassword}
            />
          </div>
        </div>
      </div>

      <div className="setting">
        <h3>Customize Your Password</h3>
        <div className="customize">
          <div className="checkboxes">
            <div className="left">
              <div className="checkbox-field">
                <input
                  type="checkbox"
                  name="lower"
                  id="lower"
                  checked={lowerCase}
                  onChange={() => setLowerCase(!lowerCase)}
                />
                <label htmlFor="lower"> Include LowerCase(a-z) </label>
              </div>
              <div className="checkbox-field">
                <input
                  type="checkbox"
                  name="upper"
                  id="upper"
                  checked={upperCase}
                  onChange={() => setUpperCase(!upperCase)}
                />
                <label htmlFor="upper"> Include UpperCase(A-Z) </label>
              </div>
            </div>
            <div className="right">
              <div className="checkbox-field">
                <input
                  type="checkbox"
                  name="numbers"
                  id="numbers"
                  checked={numbers}
                  onChange={() => setNumbers(!numbers)}
                />
                <label htmlFor="numbers"> Include Numbers(1-9) </label>
              </div>
              <div className="checkbox-field">
                <input
                  type="checkbox"
                  name="symbols"
                  id="symbols"
                  checked={symbols}
                  onChange={() => setSymbols(!symbols)}
                />
                <label htmlFor="symbols"> Include Symbols(&-#) </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="password-lenght">
        <h3>Password Lenght</h3>
        <div className="slider">
          <p className="rangeValue">{passwordLenght}</p>
          <div className="range">
            <input
              type="range"
              min={8}
              max={42}
              defaultValue={passwordLenght}
              onChange={(event) => setPasswordLenght(event.currentTarget.value)}
            />
          </div>
        </div>
      </div>
      <div className="buttons">
        <button type="button" onClick={copyPassword}>
          Copy Password
        </button>
        <button type="button" onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
