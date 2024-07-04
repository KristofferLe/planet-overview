import React, { createContext, useState, useContext } from "react";

export const ActivePlanetContext = createContext();

export default function ActivePlanetProvider({ children }) {
  const [activePlanet, setActivePlanet] = useState("mercury");
  const [activePlanetColor, setActivePlanetColor] = useState("#419EBB");

  const setActivePlanetAndColor = (planet, color) => {
    setActivePlanet(planet);
    setActivePlanetColor(color);
  };

  return (
    <ActivePlanetContext.Provider
      value={{
        activePlanet,
        setActivePlanet,
        activePlanetColor,
        setActivePlanetColor,
        setActivePlanetAndColor,
      }}
    >
      {children}
    </ActivePlanetContext.Provider>
  );
}

export const useActivePlanet = () => useContext(ActivePlanetContext);
