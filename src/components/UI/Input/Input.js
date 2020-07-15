import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = <input {...props} className={classes.InputElement} />;
      break;
    case "textarea":
      inputElement = <textarea {...props} className={classes.InputElement} />;
      break;
    default:
      inputElement = <input {...props} className={classes.InputElement} />;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
