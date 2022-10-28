import { createContext, useContext, useState } from "react";

// la maj de la date recharge le composant react
export const UpdateContext = createContext();

export const UpdateProvider = ({ children }) => {
  const [lastUpdate, setDate] = useState(new Date()); // le state de base renvoie une date
  const update = () => setDate(new Date()); // update mets a jour la date
  return (
    <UpdateContext.Provider value={{ lastUpdate, update }}>
      {children}
    </UpdateContext.Provider>
  );
};

export function useUpdate() {
  const { lastUpdate, update } = useContext(UpdateContext);
  return { lastUpdate, update };
}
