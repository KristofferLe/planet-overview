import React from "react";
import { useActivePlanet } from "../../contexts/activePlanetContext";
import { usePlanetInfo } from "../../contexts/planetInfoContext";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import MobileTabs from "./mobileTabs";
import StyledPageContainer from "./pageContainerStyles.jsx";
import { motion } from "framer-motion";
import ShootingStar from "../misc/shootingStar.jsx";

export default function PageContainer({
  planetImg,
  planetName,
  planetDesc,
  planetSrc,
  rotation,
  revolution,
  radius,
  temperature,
}) {
  const { activePlanetColor } = useActivePlanet();
  const { setInfo } = usePlanetInfo();

  return (
    <StyledPageContainer hoverColor={activePlanetColor}>
      <MobileTabs />
      <ShootingStar
        topStart={50}
        rightStart={20}
        topEnd={600}
        leftEnd={-50}
        duration={2.5}
        loop={Infinity}
      />
      <article className="image-and-overview">
        <div className="image-container">
          <motion.img
            initial={{ opacity: 0, x: -300, y: 120, scale: 0.3, rotate: 180 }}
            animate={{ opacity: 1, x: 0, y: 120, scale: 1, rotate: 0 }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.7 }}
            src={planetImg}
            alt={`image of ${planetName}`}
          />
        </div>
        <section className="overview">
          <div className="overview-text">
            <h1>{planetName.toUpperCase()}</h1>
            <p className="planet-description">{planetDesc}</p>
            <a href={planetSrc}>
              <span>Source: </span> Wikipedia <FaExternalLinkSquareAlt />
            </a>
          </div>
          <div className="tabs-container">
            <p
              value="overview"
              className="tab"
              onClick={() => setInfo("overview")}
            >
              <span>01</span> OVERVIEW
            </p>
            <p
              value="structure"
              className="tab"
              onClick={() => setInfo("structure")}
            >
              <span>02</span> INTERNAL STRUCTURE
            </p>
            <p
              value="surface"
              className="tab"
              onClick={() => setInfo("surface")}
            >
              <span>03</span> SURFACE GEOLOGY
            </p>
          </div>
        </section>
      </article>
      <section className="planet-info">
        <div>
          <p>ROTATION TIME</p>
          <h2 className="info-value">{rotation}</h2>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <h2 className="info-value">{revolution}</h2>
        </div>
        <div>
          <p>RADIUS</p>
          <h2 className="info-value">{radius}</h2>
        </div>
        <div>
          <p>AVG. TEMPERATURE</p>
          <h2 className="info-value">{temperature}</h2>
        </div>
      </section>
    </StyledPageContainer>
  );
}
