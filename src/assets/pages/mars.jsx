import React from "react";
import PlanetData from "../../assets/data/data.json";
import PageContainer from "../../assets/styled-components/pageContainer/pageContainer";
import { usePlanetInfo } from "../contexts/planetInfoContext";
import mars from "../images/mars.svg";
import marsStructure from "../images/mars-structure.svg";
import marsSurface from "../images/mars-surface.svg";

export default function Mars() {
  const { info } = usePlanetInfo();
  const marsData = PlanetData.find((planet) => planet.name === "mars");
  console.log(marsData);
  if (!marsData) return <div>Error: Mars data not found</div>;

  return (
    <PageContainer
      planetImg={
        info === "overview"
          ? mars
          : info === "structure"
          ? marsStructure
          : marsSurface
      }
      planetName="Mars"
      planetDesc={
        info === "overview"
          ? marsData.overview.content
          : info === "structure"
          ? marsData.structure.content
          : marsData.geology.content
      }
      planetSrc={marsData.overview.source}
      rotation={marsData.rotation}
      revolution={marsData.revolution}
      radius={marsData.radius}
      temperature={marsData.temperature}
    />
  );
}
