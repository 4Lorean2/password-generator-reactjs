import React, { useState, useEffect, useReducer } from "react";
import "./PasswordGenerator.css";
import copyIcon from "../assets/copy-icon.svg";
import { ToastContainer, toast } from "react-toastify";
// import { reducer } from "./reducer";
// import { initialState } from "./reducer";

const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersList = "0123456789";
const symbolsList = "!@#$%^&*()?";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);
  const [selectedChoices, setSelectedChoices] = useState([
    "lowercase",
    "uppercase",
    "numbers",
    "symbols",
  ]);

  // const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    generatePassword();
  }, [passwordLength, lowerCase, upperCase, numbers, symbols]);

  const handleCheckbox = (type) => {
    let tempChoices = [...selectedChoices];
    if (tempChoices.includes(type)) {
      tempChoices = tempChoices.filter((choice) => choice !== type);
    } else {
      tempChoices.push(type);
    }
    setSelectedChoices(tempChoices);
  };

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

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * characterListLength);
      tempPassword += characterList.charAt(characterIndex);
    }
    setPassword(tempPassword);
  };

  const copyPassword = async () => {
    const copiedText = await navigator.clipboard.readText();
    if (password.length && copiedText !== password) {
      navigator.clipboard.writeText(password);
      toast.success("Password copied to clipboard", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
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
                    disabled={
                      selectedChoices.length === 1 &&
                      selectedChoices.includes("lowercase")
                    }
                    onChange={() => {
                      setLowerCase(!lowerCase);
                      handleCheckbox("lowercase");
                    }}
                  />
                  <label htmlFor="lower">Include LowerCase(a-z)</label>
                </div>
                <div className="checkbox-field">
                  <input
                    type="checkbox"
                    name="upper"
                    id="upper"
                    checked={upperCase}
                    disabled={
                      selectedChoices.length === 1 &&
                      selectedChoices.includes("uppercase")
                    }
                    onChange={() => {
                      setUpperCase(!upperCase);
                      handleCheckbox("uppercase");
                    }}
                  />
                  <label htmlFor="upper">Include UpperCase(A-Z)</label>
                </div>
              </div>
              <div className="right">
                <div className="checkbox-field">
                  <input
                    type="checkbox"
                    name="numbers"
                    id="numbers"
                    checked={numbers}
                    disabled={
                      selectedChoices.length === 1 &&
                      selectedChoices.includes("numbers")
                    }
                    onChange={() => {
                      setNumbers(!numbers);
                      handleCheckbox("numbers");
                    }}
                  />
                  <label htmlFor="numbers">Include Numbers(0-9)</label>
                </div>
                <div className="checkbox-field">
                  <input
                    type="checkbox"
                    name="symbols"
                    id="symbols"
                    checked={symbols}
                    disabled={
                      selectedChoices.length === 1 &&
                      selectedChoices.includes("symbols")
                    }
                    onChange={() => {
                      setSymbols(!symbols);
                      handleCheckbox("symbols");
                    }}
                  />
                  <label htmlFor="symbols">Include Symbols(&-#)</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="password-lenght">
          <h3>Password Lenght</h3>
          <div className="slider">
            <p className="rangeValue">{passwordLength}</p>
            <div className="range">
              <input
                type="range"
                min={8}
                max={42}
                value={passwordLength}
                onChange={(event) =>
                  setPasswordLength(Number(event.currentTarget.value))
                }
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
      <ToastContainer />
    </>
  );
};

export default PasswordGenerator;
