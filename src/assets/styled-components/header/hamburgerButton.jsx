import React from "react";
import { useMobileMenu } from "../../contexts/mobileMenuContext";
import styled, { css } from "styled-components";

const HamburgerContainer = styled.div`
  padding: 1rem;
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerIcon = styled.div`
  width: 32px;
  height: 3px;
  border-radius: 8px;
  background-color: white;
  transition: all 0.4s ease;

  ${(props) =>
    props.isMenuOpen &&
    css`
      &:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
        background-color: gray;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        background-color: gray;
        transform: translateY(-9px) rotate(-45deg);
      }
    `}
`;

export default function HamburgerButton() {
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu();
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HamburgerContainer onClick={handleClick}>
      <HamburgerIcon isMenuOpen={isMenuOpen} />
      <HamburgerIcon isMenuOpen={isMenuOpen} />
      <HamburgerIcon isMenuOpen={isMenuOpen} />
    </HamburgerContainer>
  );
}
