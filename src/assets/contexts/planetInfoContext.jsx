import React, { createContext, useContext, useState } from "react";

export const PlanetInfoContext = createContext();

export function PlanetInfoProvider({ children }) {
  const [info, setInfo] = useState("overview");
  const showInfo = ({ target }) => setInfo(target.value);
  return (
    <PlanetInfoContext.Provider value={{ info, setInfo }}>
      {children}
    </PlanetInfoContext.Provider>
  );
}

export const usePlanetInfo = () => useContext(PlanetInfoContext);
