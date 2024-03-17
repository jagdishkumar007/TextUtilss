import React from "react";

function Alert(props) {
  const captialize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div>
      <div
        className={`alert alert-${
          props.alertText && props.alertText.type
        } alert-dismissible fade ${
          props.alertText && props.alertText.type == props.alertText.type
            ? "show"
            : ""
        } `}
      >
        {props.alertText && captialize(props.alertText.type)}:{" "}
        {props.alertText && props.alertText.msg}
      </div>
    </div>
  );
}

export default Alert;
