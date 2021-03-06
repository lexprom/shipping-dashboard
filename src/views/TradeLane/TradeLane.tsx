import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "src/components/Loader";
import { useAppDispatch } from "src/store";
import {
  fetchMarketRates,
  fetchPorts,
  selectFirstPort,
  selectIsLoading,
  selectSecondPort,
} from "src/store/tradeLane/tradeLaneSlice";
import Graph from "./Graph";
import MarketRatesTiles from "./MarketRatesTiles";
import { Container, Title } from "./TradeLane.styles";

const TradeLane = () => {
  const dispatch = useAppDispatch();
  const firstPort = useSelector(selectFirstPort);
  const secondPort = useSelector(selectSecondPort);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchPorts());
  }, []);

  useEffect(() => {
    if (firstPort && secondPort) {
      dispatch(
        fetchMarketRates({
          origin: firstPort.code,
          destination: secondPort.code,
        }),
      );
    }
  }, [firstPort, secondPort]);

  return (
    <Container>
      <Title>Trade Lanes</Title>
      <MarketRatesTiles />
      <Graph />
      {isLoading && <Loader />}
    </Container>
  );
};

export default TradeLane;
