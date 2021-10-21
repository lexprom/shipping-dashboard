import React from "react";
import Graph from "./Graph";
import MarketRatesTiles from "./MarketRatesTiles";
import { Container, Title } from "./TradeLane.styles";

const TradeLane = () => {
  return (
    <Container>
      <Title>Trade Lanes</Title>
      <MarketRatesTiles />
      <Graph />
    </Container>
  );
};

export default TradeLane;
