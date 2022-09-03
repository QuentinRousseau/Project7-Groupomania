import React from "react";
import { handleChange } from "../../utils/tools/validation";

function TextInput({ value, handleChange, type, placeholder, isValid }) {
  const classes = "input " + (isValid ? "is-succes" : "is-danger");

  return (
    <input
      className={classes}
      type={type}
      placeholder={placeholder}
      onBlur={handleChange}
    ></input>
  );
}

export default TextInput;
