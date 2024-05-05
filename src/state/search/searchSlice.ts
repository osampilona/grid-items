import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  searchTerm: string;
  filteredItems: {
    title: string;
    description: string;
    imagePath: string;
  }[];
}

const initialState: SearchState = {
  searchTerm: "",
  filteredItems: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilteredItems: (state, action) => {
      if (!state.searchTerm) {
        state.filteredItems = [];
      } else {
        state.filteredItems = action.payload;
      }
    },
  },
});

export const { setSearchTerm, setFilteredItems } = searchSlice.actions;

export default searchSlice.reducer;
