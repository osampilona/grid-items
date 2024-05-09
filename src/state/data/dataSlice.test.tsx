import dataReducer, { setItem } from "./dataSlice";
import { configureStore } from "@reduxjs/toolkit";

describe("dataSlice", () => {
  const store = configureStore({ reducer: { data: dataReducer } });

  it("should set a new item", () => {
    const newItem = {
      title: "New Item",
      description: "Description",
      imagePath: "image.jpg",
    };
    store.dispatch(setItem(newItem));
    const items = store.getState().data.items;
    expect(items[0]).toEqual(newItem);
  });

  it("should set a new item to the first place in the array", () => {
    const firstItem = {
      title: "First Item",
      description: "Description",
      imagePath: "image.jpg",
    };
    store.dispatch(setItem(firstItem));
    const items = store.getState().data.items;
    expect(items[0]).toEqual(firstItem);
  });

  it("should set a new item to the first place in the array when already existing items are present", () => {
    const existingItem = {
      title: "Existing Item",
      description: "Description",
      imagePath: "image.jpg",
    };
    const newFirstItem = {
      title: "New First Item",
      description: "Description",
      imagePath: "image.jpg",
    };

    store.dispatch(setItem(existingItem));

    store.dispatch(setItem(newFirstItem));

    const items = store.getState().data.items;
    expect(items[0]).toEqual(newFirstItem);
  });
});
