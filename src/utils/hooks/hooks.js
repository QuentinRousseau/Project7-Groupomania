import { useState } from "react";

export function useField(def, validation = () => {}) {
  const [field, _setField] = useState(def);
  const [message, setMessage] = useState("");

  function setField(event) {
    console.log(event); // lors d'un event appelant setField, afficher cet event
    const target = event.target ? event.target : event; //verifier l'element concerné par l'évènement (ex: input lors du onClick)
    const value = target.value !== undefined ? target.value : target; // vérifie la donnée saisie ou contenue dans l'élément
    setMessage(validation(value)); //attribuer la valeur définie précédemment au message.
    _setField(value);
  }
  return [field, setField, message];
}
