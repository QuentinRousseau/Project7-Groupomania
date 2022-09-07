import { useState } from "react";

export function useField(def) {
  //def étant la valeur par défaut
  const [value, setValue] = useState(def); //on attribue la valeur par défaut
  function setField(ev) {
    //ev étant l'evenement
    const target = ev.target || ev;
    const value = target.value || target;
    //lors d'un evenement ou une saisie texte, si
    //ces valeurs n'existent pas on prends l'evenement directement
    setValue(value); //on redéfinie la valeur
  }
  return [value, setField];
}
