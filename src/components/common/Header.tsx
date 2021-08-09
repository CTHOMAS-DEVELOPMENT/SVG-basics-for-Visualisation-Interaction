import React from "react";
import LinkButton from "./LinkButton";
import styled from "styled-components";

const Wrapper = styled.header`
  display: grid;
  place-items: center;
  margin-top: 2rem;
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  h2 {
    font-size: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 1rem auto;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1> D3 with SVG </h1>

      <ButtonContainer>
        <LinkButton name="Donut Chart" url="/donut-chart"/>
        <LinkButton name="Histogram (Animated but static)" url="/advanced-bar-chart"/>
        <LinkButton name="Histogram (Add data and event driven)" url="/tutorials/interactivity-basic"/>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Header;