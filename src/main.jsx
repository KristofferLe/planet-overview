import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Wrapper } from "./assets/styled-components/background-wrapper/backgroundWrapper.jsx";
import ActivePlanetProvider from "./assets/contexts/activePlanetContext.jsx";
import MobileMenuProvider from "./assets/contexts/mobileMenuContext.jsx";
import { PlanetInfoProvider } from "./assets/contexts/planetInfoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActivePlanetProvider>
      <MobileMenuProvider>
        <PlanetInfoProvider>
          <Wrapper>
            <App />
          </Wrapper>
        </PlanetInfoProvider>
      </MobileMenuProvider>
    </ActivePlanetProvider>
  </React.StrictMode>
);
