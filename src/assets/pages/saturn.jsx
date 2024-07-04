import React from "react";
import PlanetData from "../../assets/data/data.json";
import PageContainer from "../../assets/styled-components/pageContainer/pageContainer";
import { usePlanetInfo } from "../contexts/planetInfoContext";
import saturn from "../images/saturn.svg";
import saturnStructure from "../images/saturn-structure.svg";
import saturnSurface from "../images/saturn-surface.svg";

export default function Saturn() {
  const { info } = usePlanetInfo();
  const saturnData = PlanetData.find((planet) => planet.name === "saturn");
  console.log(saturnData);
  if (!saturnData) return <div>Error: Saturn data not found</div>;

  return (
    <PageContainer
      planetImg={
        info === "overview"
          ? saturn
          : info === "structure"
          ? saturnStructure
          : saturnSurface
      }
      planetName="Saturn"
      planetDesc={
        info === "overview"
          ? saturnData.overview.content
          : info === "structure"
          ? saturnData.structure.content
          : saturnData.geology.content
      }
      planetSrc={saturnData.overview.source}
      rotation={saturnData.rotation}
      revolution={saturnData.revolution}
      radius={saturnData.radius}
      temperature={saturnData.temperature}
    />
  );
}
