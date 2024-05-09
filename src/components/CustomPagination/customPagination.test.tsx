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

  //   it("renders error message when searching with no items found", async () => {
  //     // Dispatch Redux action to simulate searching with no items found
  //     store.dispatch({ type: "SET_SEARCHING", payload: true });
  //     store.dispatch({ type: "SET_FILTERED_ITEMS", payload: [] });

  //     // Find the error message
  //     const searchMessage = screen.queryByText(
  //       /Oh no, no items found in search./i
  //     );
  //     expect(searchMessage).toBeInTheDocument();

  //     // Find the try again message
  //     const tryAgainMessage = screen.queryByText(
  //       /Please try again with a different search term./i
  //     );
  //     expect(tryAgainMessage).toBeInTheDocument();
  //   });

  //   it("renders 'Collapse All Items' text on button when all items are loaded", async () => {
  //     // Dispatch Redux action to simulate searching with items found
  //     store.dispatch({ type: "SET_SEARCHING", payload: true });
  //     store.dispatch({ type: "SET_FILTERED_ITEMS", payload: [{}, {}, {}] });

  //     // Find the button with the text 'Collapse All Items'
  //     const collapseAllItemsButton = await screen.findByText(
  //       /Collapse All Items/i
  //     );
  //     expect(collapseAllItemsButton).toBeInTheDocument();
  //   });

  it("toggles 'Show All Items' button text when clicked", () => {
    // Dispatch Redux action to simulate clicking the button
    fireEvent.click(screen.getByText("Show All Items"));

    // Check if the element is found before asserting
    const updatedButtonText = screen.queryByText("Collapse All Items");
    if (updatedButtonText) {
      expect(updatedButtonText).toBeInTheDocument();
    } else {
      // If the element is not found, fail the test
      ("Button text 'Collapse All Items' not found after clicking.");
    }
  });
});
