import React, { useState } from "react";
import MarketRateTile from "src/components/MarketRateTile/MarketRateTile";
import { Container, MarketRatesTiles, Title } from "./TradeLane.styles";

enum MarketRates {
  Low,
  Average,
  High,
}

const TradeLane = () => {
  const [selectedMarketRate, setSelectedMarketRate] = useState(MarketRates.Low);

  return (
    <Container>
      <Title>Trade Lanes</Title>
      <MarketRatesTiles>
        <MarketRateTile
          title="Market Low"
          isSelected={selectedMarketRate === MarketRates.Low}
          onClick={() => setSelectedMarketRate(MarketRates.Low)}
        />
        <MarketRateTile
          title="Market Average"
          isSelected={selectedMarketRate === MarketRates.Average}
          onClick={() => setSelectedMarketRate(MarketRates.Average)}
        />
        <MarketRateTile
          title="Market High"
          isSelected={selectedMarketRate === MarketRates.High}
          onClick={() => setSelectedMarketRate(MarketRates.High)}
        />
      </MarketRatesTiles>
    </Container>
  );
};

export default TradeLane;
