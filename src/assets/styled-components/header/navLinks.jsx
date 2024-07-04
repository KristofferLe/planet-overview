import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const navLinks = [
  { name: "Mercury", path: "/", value: "mercury", color: "#419EBB" },
  { name: "Venus", path: "/venus", value: "venus", color: "#EDA249" },
  { name: "Earth", path: "/earth", value: "earth", color: "#6F2ED6" },
  { name: "Mars", path: "/mars", value: "mars", color: "#D14C32" },
  { name: "Jupiter", path: "/jupiter", value: "jupiter", color: "#D83A34" },
  { name: "Saturn", path: "/saturn", value: "saturn", color: "#CD5120" },
  { name: "Uranus", path: "/uranus", value: "uranus", color: "#1EC2A4" },
  { name: "Neptune", path: "/neptune", value: "neptune", color: "#2D68F0" },
];

export const StyledNavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 2px;
  font-weight: 600;
  font-family: antonio, sans-serif;
  transition: color 0.5s ease;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 3.5px;
    background: ${(props) => props.color};
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;
