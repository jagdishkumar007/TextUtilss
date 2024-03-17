import React, { useState } from "react";
//import About from "../Pages/About";

export default function TextForm(props) {
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UppserCase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleAlternateClick = () => {
    //console.log("Alternate click");

    const y = () => {
      let newText = text.toUpperCase().split("");

      for (var i = 0; i < newText.length; i += 2) {
        newText[i] = newText[i].toLowerCase();
      }
      return newText.join("");
    };
    const z = y(text);
    setText(z);
  };
  //const alternateCase = handleCopyClick(text);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState(" ");
  const wordCount = " " ? text.split(" ").length - 1 : text.split(" ").length;
  return (
    <>
      <div className="container py-5">
        <h3>{props.Heading}</h3>
        <div className="mb-3">
          <textarea
            className={`form-control mb-2 bg-${props.mode} text-${
              props.mode === "light" ? "dark" : "light"
            } `}
            id="mytextarea"
            rows="10"
            value={text}
            onChange={onChangeText}
          ></textarea>
          <button className="btn btn-primary" onClick={handleUpCase}>
            Convert to Uppercase
          </button>
          <button className="btn btn-success ms-2" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button
            className="btn btn-success ms-2"
            onClick={handleAlternateClick}
          >
            Alternate Case
          </button>
          <button className="btn btn-warning ms-2" onClick={handleClearClick}>
            Clear Text
          </button>
        </div>
      </div>

      <div className="container my-2">
        <h4>Your Text summary will be here </h4>
        <p>
          <b>{wordCount}</b> words and <b>{text.length}</b> Characters.
          <small>
            {" "}
            And it will take average <b>
              {" "}
              {0.008 * text.split("").length}
            </b>{" "}
            minutes to read
          </small>
        </p>
        <h3 className="mt-4">Preview</h3>
        <p>
          {" "}
          {text.length === 0
            ? "Your Preview textw ill be here, so add text in above text box to show text here "
            : text}
        </p>
      </div>

      {/* <About name2112ee={props.name2112ee} /> */}
    </>
  );
}
