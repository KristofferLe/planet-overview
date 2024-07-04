import React, { useEffect } from "react";
import { useMobileMenu } from "../../contexts/mobileMenuContext";
import { useActivePlanet } from "../../contexts/activePlanetContext";
import styled from "styled-components";
import { navLinks, StyledNavLink } from "./navLinks";
import { useMediaQuery } from "react-responsive";
import HamburgerButton from "./hamburgerButton";

const StyledHeader = styled.header`
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);

  nav {
    display: flex;
    gap: 24px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 24px;

    nav {
      width: 90%;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;

    nav {
      display: none;
    }
  }
`;

export default function Header() {
  const { setIsMenuOpen, toggleMenu } = useMobileMenu();
  const { setActivePlanet, setActivePlanetAndColor, setActivePlanetColor } =
    useActivePlanet();
  const handleClick = (planet, color) => {
    setActivePlanetAndColor(planet, color);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile, setIsMenuOpen]);

  return (
    <StyledHeader>
      <h2>THE PLANETS</h2>
      <HamburgerButton onClick={toggleMenu} />
      <nav>
        {navLinks.map((link) => {
          return (
            <StyledNavLink
              to={link.path}
              key={link.value}
              color={link.color}
              value={link.value}
              onClick={() => {
                handleClick(link.value, link.color);
                setActivePlanet(link.value);
                setActivePlanetColor(link.color);
              }}
            >
              {link.name.toUpperCase()}
            </StyledNavLink>
          );
        })}
      </nav>
    </StyledHeader>
  );
}
