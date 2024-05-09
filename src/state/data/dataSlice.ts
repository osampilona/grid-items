import { createSlice } from "@reduxjs/toolkit";
import items from "../../data/grid-items.json";
import { Item } from "../../types/reduxTypes";

interface DataSlice {
  items: Item[];
}

const initialState: DataSlice = {
  items: items,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.items.unshift(action.payload);
    },
  },
});

export const { setItem } = dataSlice.actions;

export default dataSlice.reducer;
