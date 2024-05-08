import dataReducer, { setItem } from "./dataSlice";
import { configureStore } from "@reduxjs/toolkit";

describe("dataSlice", () => {
  const store = configureStore({ reducer: { data: dataReducer } });

  it("should set a new item", () => {
    store.dispatch(
      setItem({
        title: "New Item",
        description: "Description",
        imagePath: "image.jpg",
      })
    );
    const items = store.getState().data.items;
    expect(items[0].title).toBe("New Item");
  });

  it("should set a new item to the first place in the array", () => {
    store.dispatch(
      setItem({
        title: "First Item",
        description: "Description",
        imagePath: "image.jpg",
      })
    );

    const items = store.getState().data.items;
    expect(items[0].title).toBe("First Item");
  });
});