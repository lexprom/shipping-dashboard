import React from "react";
import { Container, Title } from "./MarketRateTile.styles";

interface MarketRateTileProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

const MarketRateTile = ({
  title,
  isSelected,
  onClick,
}: MarketRateTileProps) => {
  return (
    <Container isSelected={isSelected} onClick={onClick}>
      <Title isSelected={isSelected}>{title}</Title>
    </Container>
  );
};

export default MarketRateTile;
