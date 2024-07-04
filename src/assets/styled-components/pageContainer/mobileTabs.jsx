import React from "react";
import { useActivePlanet } from "../../contexts/activePlanetContext";
import { usePlanetInfo } from "../../contexts/planetInfoContext";
import styled from "styled-components";

const MobileTabsContainer = styled.section`
  background: transparent;
  width: 100%;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-around;
  display: none;
  font-weight: 700;
  letter-spacing: 3px;

  @media screen and (max-width: 768px) {
    display: flex;
  }

  p {
    padding: 24px 0px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);

    &.active {
      border-bottom: solid 4px ${(props) => props.color};
      color: white;
    }
  }
`;

export default function MobileTabs() {
  const { activePlanetColor } = useActivePlanet();
  const { info, setInfo } = usePlanetInfo();
  const Tabs = ["overview", "structure", "surface"];

  return (
    <MobileTabsContainer color={activePlanetColor}>
      {Tabs.map((tab, index) => (
        <p
          key={index}
          className={info === tab ? "active" : ""}
          onClick={() => setInfo(tab)}
        >
          {tab.toUpperCase()}
        </p>
      ))}
    </MobileTabsContainer>
  );
}
