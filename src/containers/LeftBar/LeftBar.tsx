import React from "react";
import { AppTitle, Container, Options, OverviewOption } from "./LeftBar.styles";
import graphIcon from "../../../assets/chart.png";

const LeftBar = () => {
  return (
    <Container>
      <AppTitle>Dashboard</AppTitle>
      <Options>
        <OverviewOption>
          <img src={graphIcon} />
          Trade Lanes
        </OverviewOption>
      </Options>
    </Container>
  );
};

export default LeftBar;
