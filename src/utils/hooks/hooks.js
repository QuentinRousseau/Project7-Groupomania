import { useState } from "react";

export function useField(def, validation = () => {}) {
  const [field, _setField] = useState(def);
  const [message, setMessage] = useState("");

  function setField(event) {
    console.log(event);
    const target = event.target ? event.target : event;
    const value = target.value !== undefined ? target.value : target;
    setMessage(validation(value));
    _setField(value);
  }
  return [field, setField, message];
}
