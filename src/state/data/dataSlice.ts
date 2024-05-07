import { createSlice } from "@reduxjs/toolkit";
import items from "../../data/grid-items.json";

interface DataSlice {
  items: {
    title: string;
    description: string;
    imagePath: string;
  }[];
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
