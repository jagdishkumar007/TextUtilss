import React, { useState } from "react";
import "./App.css";

//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Home from "./Pages/home";
import Header from "./Components/Header";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

import About from "./Pages/About";

function App() {
  // Props Drilling
  // const name2112ee = "About Text is getting from App ";

  const [mode, setDarkMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [moode, setDarkRedMode] = useState("light");

  const [alertText, setAlertText] = useState(null);

  const showAlert = (message, type) => {
    setAlertText({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlertText(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      setBtnText("Enable Light Mode");
      document.body.style.backgroundColor = "#222";
      document.body.style.color = "white";
      //  debugger;
      showAlert("Dark mode has been enabled", "success");

      // document.title = "TextUtils - Dark Mode ";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing ";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);

      // setDarkRedMode("dark");
    } else {
      setDarkMode("light");
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#222";
      showAlert("Light mode has been enabled", "success");
      // setDarkRedMode("light");
      setDarkRedMode("light");
      document.title = "TextUtils - light Mode ";
    }
  };

  const darkRedMode = () => {
    if (moode === "light") {
      setDarkRedMode("redDarkColor");
      document.body.style.backgroundColor = "#ff0000";
      document.body.style.color = "white";
    } else {
      setDarkRedMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000";
    }
    alert("jk");
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          title="Jagdish.com"
          aboutText="About Jagdish"
          mode={mode}
          moode={moode}
          toggleMode={toggleMode}
          darkRedMode={darkRedMode}
          btnText={btnText}
        />

        <Alert alertText={alertText} />
        <Routes>
          <Route exact path="about" element={<About />} />
          <Route
            exact
            index
            element={
              <TextForm
                Heading="Enter your text to Analyse"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
