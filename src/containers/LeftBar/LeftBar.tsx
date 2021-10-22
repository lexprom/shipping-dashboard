import React from "react";
import {
  AppTitle,
  Container,
  Options,
  OveriviewLogo,
  OverviewOption,
} from "./LeftBar.styles";
import chartIcon from "../../../assets/chart.svg";

const LeftBar = () => {
  return (
    <Container>
      <AppTitle>Dashboard</AppTitle>
      <Options>
        <OverviewOption>
          <OveriviewLogo src={chartIcon} />
          Trade Lanes
        </OverviewOption>
      </Options>
    </Container>
  );
};

export default LeftBar;
