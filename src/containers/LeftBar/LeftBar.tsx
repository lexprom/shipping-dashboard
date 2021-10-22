import React from "react";
import {
  AppTitle,
  Container,
  Options,
  TradeLaneLogo,
  TradeLaneOption,
} from "./LeftBar.styles";
import chartIcon from "../../../assets/chart.svg";

const LeftBar = () => {
  return (
    <Container>
      <AppTitle>Dashboard</AppTitle>
      <Options>
        <TradeLaneOption>
          <TradeLaneLogo src={chartIcon} />
          Trade Lanes
        </TradeLaneOption>
      </Options>
    </Container>
  );
};

export default LeftBar;
