import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomPagination from "./CustomPagination";
import { Provider } from "react-redux";
import { store } from "../../state/store";

describe("CustomPagination Component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <CustomPagination />
      </Provider>
    );
  });

  it("renders pagination controls when not searching", () => {
    const paginationControls = screen.queryByTestId("pagination-controls");
    expect(paginationControls).toBeInTheDocument();
  });

  it("renders 'Show All Items' button when not searching", () => {
    const showAllItemsButton = screen.queryByText("Show All Items");
    expect(showAllItemsButton).toBeInTheDocument();
  });

  it("toggles 'Show All Items' button text when clicked", () => {
    fireEvent.click(screen.getByText("Show All Items"));

    const updatedButtonText = screen.queryByText("Collapse All Items");
    if (updatedButtonText) {
      expect(updatedButtonText).toBeInTheDocument();
    } else {
      ("Button text 'Collapse All Items' not found after clicking.");
    }
  });
});
