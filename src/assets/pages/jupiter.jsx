import React from "react";
import PlanetData from "../../assets/data/data.json";
import PageContainer from "../../assets/styled-components/pageContainer/pageContainer";
import { usePlanetInfo } from "../contexts/planetInfoContext";
import jupiter from "../images/jupiter.svg";
import jupiterStructure from "../images/jupiter-structure.svg";
import jupiterSurface from "../images/jupiter-surface.svg";

export default function Jupiter() {
  const { info } = usePlanetInfo();
  const jupiterData = PlanetData.find((planet) => planet.name === "jupiter");
  console.log(jupiterData);
  if (!jupiterData) return <div>Error: Mars data not found</div>;

  return (
    <PageContainer
      planetImg={
        info === "overview"
          ? jupiter
          : info === "structure"
          ? jupiterStructure
          : jupiterSurface
      }
      planetName="Jupiter"
      planetDesc={
        info === "overview"
          ? jupiterData.overview.content
          : info === "structure"
          ? jupiterData.structure.content
          : jupiterData.geology.content
      }
      planetSrc={jupiterData.overview.source}
      rotation={jupiterData.rotation}
      revolution={jupiterData.revolution}
      radius={jupiterData.radius}
      temperature={jupiterData.temperature}
    />
  );
}
