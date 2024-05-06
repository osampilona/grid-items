import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  searchTerm: string;
  filteredItems: {
    title: string;
    description: string;
    imagePath: string;
  }[];
  isSearching: boolean;
}

const initialState: SearchState = {
  searchTerm: "",
  filteredItems: [],
  isSearching: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilteredItems: (state, action) => {
      if (!state.searchTerm && !state.isSearching) {
        state.filteredItems = [];
        state.isSearching = false;
      } else {
        state.filteredItems = action.payload;
      }
    },
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },
  },
});

export const { setSearchTerm, setFilteredItems, setIsSearching } =
  searchSlice.actions;

export default searchSlice.reducer;
