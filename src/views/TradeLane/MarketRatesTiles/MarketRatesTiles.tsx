import React from "react";
import { useSelector } from "react-redux";
import MarketRateTile from "src/components/MarketRateTile/MarketRateTile";
import { useAppDispatch } from "src/store";
import {
  changeMarketRateFilter,
  MarketRates,
  selectCurrentMarketRateFilter,
} from "src/store/tradeLane/tradeLaneSlice";
import { Container } from "./MarketRatesTiles.styles";

const MarketRatesTiles = () => {
  const dispatch = useAppDispatch();
  const selectedMarketRateFilter = useSelector(selectCurrentMarketRateFilter);

  const onMarketRateTileClick = (marketRate: MarketRates) => {
    dispatch(changeMarketRateFilter(marketRate));
  };

  return (
    <Container>
      <MarketRateTile
        title="Market Low"
        isSelected={selectedMarketRateFilter === MarketRates.Low}
        onClick={() => onMarketRateTileClick(MarketRates.Low)}
      />
      <MarketRateTile
        title="Market Average"
        isSelected={selectedMarketRateFilter === MarketRates.Average}
        onClick={() => onMarketRateTileClick(MarketRates.Average)}
      />
      <MarketRateTile
        title="Market High"
        isSelected={selectedMarketRateFilter === MarketRates.High}
        onClick={() => onMarketRateTileClick(MarketRates.High)}
      />
    </Container>
  );
};

export default MarketRatesTiles;
