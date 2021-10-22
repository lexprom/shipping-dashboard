import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MarketRateTile from "src/components/MarketRateTile";

describe("<MarketRateTile />", () => {
  test("should change the color if gets clicked", () => {
    const { getByText } = render(
      <MarketRateTile
        title="Market Low"
        isSelected={true}
        onClick={() => {}}
      />,
    );

    const tile = getByText("Market Low");

    fireEvent.click(tile);
    expect(tile).toHaveStyle("color: #3751FF");
  });
});
