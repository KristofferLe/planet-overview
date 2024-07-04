import React from "react";
import PageContainer from "../styled-components/pageContainer/pageContainer";
import planetData from "../../assets/data/data.json";
import venus from "../images/venus.svg";
import venusStructure from "../images/venus-structure.svg";
import venusSurface from "../images/venus-surface.svg";
import { usePlanetInfo } from "../contexts/planetInfoContext";

export default function Venus() {
  const { info } = usePlanetInfo();
  const venusData = planetData.find((planet) => planet.name === "venus");
  console.log(venusData);
  if (!venusData) return <div>Error: Venus data not found</div>;

  return (
    <PageContainer
      planetImg={
        info === "overview"
          ? venus
          : info === "structure"
          ? venusStructure
          : venusSurface
      }
      planetName="Venus"
      planetDesc={
        info === "overview"
          ? venusData.overview.content
          : info === "structure"
          ? venusData.structure.content
          : venusData.geology.content
      }
      planetSrc={venusData.overview.source}
      rotation={venusData.rotation}
      revolution={venusData.revolution}
      radius={venusData.radius}
      temperature={venusData.temperature}
    />
  );
}
