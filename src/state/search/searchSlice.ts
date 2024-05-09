import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../../types/reduxTypes";

interface SearchState {
  searchTerm: string;
  filteredItems: Item[];
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
      const newSearchTerm = action.payload;
      state.searchTerm = newSearchTerm;
      if (!newSearchTerm) {
        state.filteredItems = [];
        state.isSearching = false;
      }
    },
    setFilteredItems: (state, action) => {
      if (!state.searchTerm && !state.isSearching) {
        state.filteredItems = [];
        state.isSearching = false;
      } else {
        state.filteredItems = action.payload;
        state.isSearching = true;
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
