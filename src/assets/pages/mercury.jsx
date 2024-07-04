import React from "react";
import PageContainer from "../styled-components/pageContainer/pageContainer";
import planetData from "../../assets/data/data.json";
import mercury from "../images/mercury.svg";
import mercuryStructure from "../images/mercury-structure.svg";
import mercurySurface from "../images/mercury-surface.svg";
import { usePlanetInfo } from "../contexts/planetInfoContext";

export default function Mercury() {
  const { info } = usePlanetInfo();

  const mercuryData = planetData.find((planet) => planet.name === "mercury");

  console.log(mercuryData); // Add this line to check if data is available

  if (!mercuryData) {
    return <div>Error: Mercury data not found</div>;
  }

  return (
    <PageContainer
      planetImg={
        info === "overview"
          ? mercury
          : info === "structure"
          ? mercuryStructure
          : mercurySurface
      }
      planetName="Mercury"
      planetDesc={
        info === "overview"
          ? mercuryData.overview.content
          : info === "structure"
          ? mercuryData.structure.content
          : mercuryData.geology.content
      }
      planetSrc={mercuryData.overview.source}
      rotation={mercuryData.rotation}
      revolution={mercuryData.revolution}
      radius={mercuryData.radius}
      temperature={mercuryData.temperature}
    />
  );
}
