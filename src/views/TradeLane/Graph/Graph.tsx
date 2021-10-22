import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SelectSearch from "src/components/SelectSearch/SelectSearch";
import { useAppDispatch } from "src/store";
import {
  fetchMarketRates,
  selectErrorMessage,
  selectFirstPort,
  selectMarketRates,
  selectPorts,
  selectSecondPort,
  updateFirstPort,
  updateSecondPort,
} from "src/store/tradeLane/tradeLaneSlice";
import {
  Container,
  DestinationIcon,
  ErrorMessage,
  PortSelectors,
} from "./Graph.styles";
import LineChart from "./LineChart";
import twoArrowsIcon from "../../../../assets/two-arrows.svg";
import DateRange from "./DateRange";

const Graph = () => {
  const dispatch = useAppDispatch();
  const ports = useSelector(selectPorts);
  const marketRates = useSelector(selectMarketRates);
  const firstPort = useSelector(selectFirstPort);
  const secondPort = useSelector(selectSecondPort);
  const errorMessage = useSelector(selectErrorMessage);

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
      <PortSelectors>
        <SelectSearch
          options={ports}
          defaultValue={firstPort}
          onChange={port => dispatch(updateFirstPort(port))}
        />
        <DestinationIcon src={twoArrowsIcon} />
        <SelectSearch
          options={ports}
          defaultValue={secondPort}
          onChange={port => dispatch(updateSecondPort(port))}
        />
      </PortSelectors>

      {errorMessage ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : (
        <>
          <LineChart width={600} height={300} marketRates={marketRates} />
          <DateRange
            startDate={marketRates.length && marketRates[0].day}
            endDate={
              marketRates.length && marketRates[marketRates.length - 1].day
            }
          />
        </>
      )}
    </Container>
  );
};

export default Graph;
