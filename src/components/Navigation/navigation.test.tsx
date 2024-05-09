import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import { store } from "../../state/store";

describe("Navigation Component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Navigation />;
      </Provider>
    );
  });

  it("should render the title 'Items Grid'", () => {
    const titleElement = screen.getByText("Items Grid");
    expect(titleElement).toBeInTheDocument();
  });

  it("should render the Search component", () => {
    const searchComponent = screen.getByRole("search");
    expect(searchComponent).toBeInTheDocument();
  });

  it("should render the Form component", () => {
    const formComponent = screen.getByTestId("form");
    expect(formComponent).toBeInTheDocument();
  });

  it("should have correct class names for layout", () => {
    const navigationElement = screen.getByRole("header");
    expect(navigationElement).toHaveClass(
      "flex",
      "flex-col",
      "lg:flex-row",
      "justify-between",
      "w-full",
      "gap-4",
      "py-8",
      "lg:py-0",
      "mb-4"
    );
  });
});
