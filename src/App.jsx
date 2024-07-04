import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./assets/styled-components/header/header";
import Mercury from "./assets/pages/mercury";
import MobileMenu from "./assets/styled-components/header/mobileMenu/mobileMenu";
import { useMobileMenu } from "./assets/contexts/mobileMenuContext";
import Venus from "./assets/pages/venus";
import Earth from "./assets/pages/earth";
import Mars from "./assets/pages/mars";
import Jupiter from "./assets/pages/jupiter";
import Saturn from "./assets/pages/saturn";
import Uranus from "./assets/pages/uranus";
import Neptune from "./assets/pages/neptune";

function App() {
  const { isMenuOpen } = useMobileMenu();

  return (
    <Router>
      <Header />
      <MobileMenu isMenuOpen={isMenuOpen} />
      <Routes>
        <Route path="/" element={<Mercury />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptune" element={<Neptune />} />
      </Routes>
    </Router>
  );
}

export default App;
