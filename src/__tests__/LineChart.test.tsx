import React from "react";
import { render } from "@testing-library/react";
import LineChart from "src/views/TradeLane/Graph/LineChart";
import { Provider } from "react-redux";
import { store } from "src/store";

describe("<LineChart />", () => {
  test("should display a chart", () => {
    const { container } = render(
      <Provider store={store}>
        <LineChart
          width={600}
          height={300}
          marketRates={[
            {
              day: "2021-01-01",
              mean: 690,
              low: 68,
              high: 1366,
            },
            {
              day: "2021-01-02",
              mean: 691,
              low: 50,
              high: 1363,
            },
          ]}
        />
      </Provider>,
    );

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });
});
