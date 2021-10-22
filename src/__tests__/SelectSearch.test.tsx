import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SelectSearch from "src/components/SelectSearch";

describe("<SelectSearch />", () => {
  test("should display a select search component with a default port", () => {
    const { queryByPlaceholderText } = render(
      <SelectSearch
        options={[{ name: "Oslo" }]}
        onChange={() => {}}
        defaultValue={{ name: "Oslo" }}
      />,
    );
    const input = queryByPlaceholderText("Type to search ports");
    expect(input).toHaveValue("Oslo");
  });

  test("should appear an options selector on focus", () => {
    const { queryByPlaceholderText, getByRole } = render(
      <SelectSearch options={[{ name: "Oslo" }]} onChange={() => {}} />,
    );
    const input = queryByPlaceholderText("Type to search ports");
    if (input) {
      fireEvent.focus(input);
      expect(getByRole("list")).toBeInTheDocument();
    }
  });
});
