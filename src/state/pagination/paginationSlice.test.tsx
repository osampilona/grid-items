import paginationReducer, {
  setCurrentPage,
  setShowAllItems,
} from "./paginationSlice";
import { configureStore } from "@reduxjs/toolkit";

describe("paginationSlice", () => {
  const store = configureStore({ reducer: { pagination: paginationReducer } });

  it("should set the current page", () => {
    store.dispatch(setCurrentPage(2));
    const currentPage = store.getState().pagination.currentPage;
    expect(currentPage).toBe(2);
  });

  it("should toggle the showAllItems flag", () => {
    store.dispatch(setShowAllItems());
    let showAllItems = store.getState().pagination.showAllItems;
    expect(showAllItems).toBe(true);

    store.dispatch(setShowAllItems());
    showAllItems = store.getState().pagination.showAllItems;
    expect(showAllItems).toBe(false);
  });
});
