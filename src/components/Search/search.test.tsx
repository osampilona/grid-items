import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";
import { Provider } from "react-redux";
import { store } from "../../state/store";

describe("Search Component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
  });

  it("renders with placeholder text", () => {
    const inputElement = screen.getByPlaceholderText("Search for items...");
    expect(inputElement).toBeInTheDocument();
  });

  it("updates search term when typing", () => {
    const inputElement = screen.getByPlaceholderText("Search for items...");
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement).toHaveValue("test");
  });

  it("clears search term when clear button is clicked", () => {
    const inputElement = screen.getByPlaceholderText("Search for items...");
    fireEvent.change(inputElement, { target: { value: "test" } });
    const clearButton = screen.getByTestId("clear-button");
    fireEvent.click(clearButton);
    expect(inputElement).toHaveValue();
  });
});
