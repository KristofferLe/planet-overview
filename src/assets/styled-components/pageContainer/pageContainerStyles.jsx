import React from "react";
import styled from "styled-components";

const StyledPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 1024px) {
    height: 100vh;
  }

  .image-container {
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
      min-height: 200px;
    }
  }

  img {
    width: 400px;
    @media screen and (max-width: 1024px) {
      width: 300px;
    }

    @media screen and (max-width: 768px) {
      width: 250px;
    }
  }

  .image-and-overview {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 95%;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      gap: 80px;
    }
  }

  .overview-text {
    gap: 32px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      h1 {
        font-size: 4rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .overview-text {
      display: flex;
      border: solid 1px red;
      flex-direction: column;
      gap: 32px;
      align-items: center;
      justify-content: center;
      text-align: center;

      p {
        width: 400px;
        transform: translateY(-10px);
      }
    }
  }

  .overview {
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    tabs-container {
      display: flex;
      flex-direction: column;
      gap: 24px;

      @media screen and (max-width: 768px) {
        align-items: center;
        justify-content: center;
        width: 100%;
      }
    }

    a {
      color: rgba(255, 255, 255, 0.5);
      font-weight: bold;
      transform: translateY(-5px);
      &:hover {
        color: white;
      }
    }

    @media screen and (max-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    .planet-description {
      font-family: "League Spartan", sans-serif;
      line-height: 1.4rem;
      font-size: 1rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .tabs-container {
    display: none;

    @media screen and (min-width: 768px) {
      display: grid;
      gap: 24px;
    }

    .tab {
      color: white;
      padding: 20px;
      border: solid 1px rgba(255, 255, 255, 0.3);
      cursor: pointer;
      font-weight: bold;
      display: flex;
      gap: 16px;
      font-size: 1rem;
      font-family: league spartan, sans-serif;
      letter-spacing: 3px;
      transition: all 0.5s ease;

      @media screen and (min-width: 768px) {
        display: flex;
      }

      &:hover {
        background-color: ${(props) => props.hoverColor};
        scale: 110%;
      }
    }

    span {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  .planet-info {
    display: flex;
    gap: 16px;
    width: 95%;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    div {
      color: white;
      width: 100%;
      min-height: 125px;
      border: solid 1px rgba(255, 255, 255, 0.5);
      display: flex;
      flex-direction: column;
      padding: 10px 8px;
      align-items: start;
      justify-content: space-around;
      text-transform: uppercase;
      font-family: antonio, sans-serif;

      @media screen and (max-width: 768px) {
        height: 70px;
        min-height: 60px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0px 20px;
      }

      p {
        color: rgba(255, 255, 255, 0.5);
        font-size: 1rem;
        letter-spacing: 1px;

        font-weight: bold;
      }

      .info-value {
        font-weight: bold;
        letter-spacing: 0px;
        color: rgba(255, 255, 255, 0.9);
        @media screen and (max-width: 1024px) {
          font-size: 2rem;
          font-weight: 500;
        }
      }
    }
  }
`;

export default StyledPageContainer;
