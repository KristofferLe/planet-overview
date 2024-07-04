import React from "react";
import PlanetData from "../../assets/data/data.json";
import PageContainer from "../../assets/styled-components/pageContainer/pageContainer";
import { usePlanetInfo } from "../contexts/planetInfoContext";
import uranus from "../images/uranus.svg";
import uranusStructure from "../images/uranus-structure.svg";
import uranusSurface from "../images/uranus-surface.svg";

export default function Uranus() {
  const { info } = usePlanetInfo();
  const uranusData = PlanetData.find((planet) => planet.name === "uranus");
  console.log(uranusData);
  if (!uranusData) return <div>Error: Uranus data not found</div>;

  return (
    <PageContainer
      planetImg={
        info === "overview"
          ? uranus
          : info === "structure"
          ? uranusStructure
          : uranusSurface
      }
      planetName="Uranus"
      planetDesc={
        info === "overview"
          ? uranusData.overview.content
          : info === "structure"
          ? uranusData.structure.content
          : uranusData.geology.content
      }
      planetSrc={uranusData.overview.source}
      rotation={uranusData.rotation}
      revolution={uranusData.revolution}
      radius={uranusData.radius}
      temperature={uranusData.temperature}
    />
  );
}
