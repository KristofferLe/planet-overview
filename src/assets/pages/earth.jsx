import React from "react";
import PlanetData from "../../assets/data/data.json";
import PageContainer from "../../assets/styled-components/pageContainer/pageContainer";
import { usePlanetInfo } from "../contexts/planetInfoContext";
import earth from "../images/earth.svg";
import earthStructure from "../images/earth-structure.svg";
import earthSurface from "../images/earth-surface.svg";

export default function Earth() {
  const { info } = usePlanetInfo();
  const earthData = PlanetData.find((planet) => planet.name === "earth");
  console.log(earthData);
  if (!earthData) return <div>Error: Earth data not found</div>;

  return (
    <PageContainer
      planetImg={
        info === "overview"
          ? earth
          : info === "structure"
          ? earthStructure
          : earthSurface
      }
      planetName="Earth"
      planetDesc={
        info === "overview"
          ? earthData.overview.content
          : info === "structure"
          ? earthData.structure.content
          : earthData.geology.content
      }
      planetSrc={earthData.overview.source}
      rotation={earthData.rotation}
      revolution={earthData.revolution}
      radius={earthData.radius}
      temperature={earthData.temperature}
    />
  );
}
