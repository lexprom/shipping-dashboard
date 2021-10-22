import React from "react";
import { render } from "@testing-library/react";
import LeftBar from "src/containers/LeftBar";

describe("<LeftBar />", () => {
  test("should display a left bar with TradeLane option", () => {
    const { getByText } = render(<LeftBar />);
    expect(getByText("Trade Lanes")).toBeInTheDocument();
  });
});
