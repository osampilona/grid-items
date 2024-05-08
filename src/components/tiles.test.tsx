import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Tiles from "./Tiles";
import { Provider } from "react-redux";
import { store } from "../state/store";

describe("Tiles Component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Tiles />
      </Provider>
    );
  });

  it("renders items correctly", () => {
    // Mock items data
    const mockItems = [
      {
        title: "Item 1",
        description: "Description for Item 1",
        imagePath: "image1.jpg",
      },
      {
        title: "Item 2",
        description: "Description for Item 2",
        imagePath: "image2.jpg",
      },
      {
        title: "Item 3",
        description: "Description for Item 3",
        imagePath: "image3.jpg",
      },
      {
        title: "Item 4",
        description: "Description for Item 4",
        imagePath: "image4.jpg",
      },
    ];

    // Mock Redux state
    store.dispatch({ type: "SET_ITEMS", payload: mockItems });

    // Check if items are rendered
    const itemElements = screen.getAllByTestId("card");
    expect(itemElements.length).toBe(mockItems.length);

    // Check if each item displays the correct title and description
    // Check if each item displays the correct title and description
    mockItems.forEach(async (item) => {
      const titleElement = await screen.findByText(item.title);
      expect(titleElement).toBeInTheDocument();

      const descriptionElement = await screen.findByText(item.description);
      expect(descriptionElement).toBeInTheDocument();
    });
  });
});
