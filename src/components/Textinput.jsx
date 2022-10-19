import React from "react";

function TextInput({ value, onChange, type, placeholder, isValid }) {
  //on recupere les props dans le parent (box)
  const classes = "input " + (isValid ? "is-success" : "is-primary");

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      value={value}
      className={classes}
      type={type}
      placeholder={placeholder}
      onChange={handleInputChange}
    ></input>
  );
}

export default TextInput;
