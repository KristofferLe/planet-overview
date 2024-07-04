import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { navLinks } from "../navLinks";
import { useMobileMenu } from "../../../contexts/mobileMenuContext";
import { useActivePlanet } from "../../../contexts/activePlanetContext";
import { MdKeyboardArrowRight } from "react-icons/md";

const MobileMenuContainer = styled.section`
  background-color: #070724;
  position: fixed;
  top: 0;
  bottom: 0;
  transform: translateX(-100%);
  overflow: hidden;
  width: 100%;
  z-index: 999;
  transition: transform 0.5s ease;

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      transform: translateX(0%);
    `}

  display: none;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .no-link-error {
    color: red;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ColorCirlce = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  background-color: ${(props) => props.color};
`;

const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  height: 100%;
  width: 100%;
  letter-spacing: 2px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default function MobileMenu() {
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu();
  const { setActivePlanet, setActivePlanetColor } = useActivePlanet();

  return (
    <MobileMenuContainer isMenuOpen={isMenuOpen}>
      <ul>
        {navLinks.length === 0 ? (
          <p className="no-link-error">No Link</p>
        ) : (
          navLinks.map((link) => {
            return (
              <StyledNavLink
                aria-label={`Link to the ${link.name} page.`}
                key={link.value}
                to={link.path}
                onClick={() => {
                  setIsMenuOpen(false);
                  setActivePlanet(link.value);
                  setActivePlanetColor(link.color);
                }}
              >
                <div>
                  <ColorCirlce color={link.color} />
                  <p>{link.name.toUpperCase()}</p>
                </div>
                <MdKeyboardArrowRight />
              </StyledNavLink>
            );
          })
        )}
      </ul>
    </MobileMenuContainer>
  );
}
