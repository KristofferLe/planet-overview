import React from "react";
import PlanetData from "../../assets/data/data.json";
import PageContainer from "../../assets/styled-components/pageContainer/pageContainer";
import { usePlanetInfo } from "../contexts/planetInfoContext";
import neptune from "../images/neptune.svg";
import neptuneStructure from "../images/neptune-structure.svg";
import neptuneSurface from "../images/neptune-surface.svg";

export default function Uranus() {
  const { info } = usePlanetInfo();
  const neptuneData = PlanetData.find((planet) => planet.name === "neptune");
  console.log(neptuneData);
  if (!neptuneData) return <div>Error: Neptune data not found</div>;

  return (
    <PageContainer
      planetImg={
        info === "overview"
          ? neptune
          : info === "structure"
          ? neptuneStructure
          : neptuneSurface
      }
      planetName="Neptune"
      planetDesc={
        info === "overview"
          ? neptuneData.overview.content
          : info === "structure"
          ? neptuneData.structure.content
          : neptuneData.geology.content
      }
      planetSrc={neptuneData.overview.source}
      rotation={neptuneData.rotation}
      revolution={neptuneData.revolution}
      radius={neptuneData.radius}
      temperature={neptuneData.temperature}
    />
  );
}
