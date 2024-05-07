import { createSlice } from "@reduxjs/toolkit";
import items from "../../data/grid-items.json";

interface DataSlice {
  items: {
    title: string;
    description: string;
    imagePath: string;
  }[];
  loading: boolean;
  error: string;
}

const initialState: DataSlice = {
  items: items,
  loading: false,
  error: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setItem: (state, action) => {
      console.log("PAYLOAD:: ", action.payload);
      state.items.unshift(action.payload);
    },
  },
});

export const { setLoading, setError, setItem } = dataSlice.actions;

export default dataSlice.reducer;
