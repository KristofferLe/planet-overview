import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { PiShootingStar } from "react-icons/pi";

const StyledStar = styled(motion.div)`
  position: absolute;
  border-radius: 100%;
  color: yellow;
  font-size: 1rem;
  top: 20px;
  right: 20px;
  z-index: 1;
  opacity: 50%;

  .star {
    transform: rotate(195deg);
  }
`;

export default function ShootingStar({
  topStart,
  rightStart,
  topEnd,
  leftEnd,
  duration,
  loop,
}) {
  return (
    <StyledStar
      initial={{ top: topStart, right: rightStart }}
      animate={{ top: topEnd, left: leftEnd }}
      transition={{ duration: duration, loop: loop, repeatDelay: 0 }}
    >
      <PiShootingStar className="star" />
    </StyledStar>
  );
}
