import React from "react";
import { render, waitFor } from "@testing-library/react";
import TradeLane from "src/views/TradeLane";
import { Provider } from "react-redux";
import { store } from "src/store";

global.fetch = jest.fn().mockImplementation();

describe("<TradeLane />", () => {
  test("should fetch ports on mounting", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation();
    console.error = jest.fn();

    render(
      <Provider store={store}>
        <TradeLane />
      </Provider>,
    );

    const abortedSignal = new AbortController();
    abortedSignal.abort();

    await waitFor(() =>
      expect(fetchMock).toHaveBeenCalledWith("undefined/ports", {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": undefined,
        },
        signal: abortedSignal.signal,
      }),
    );
  });
});
