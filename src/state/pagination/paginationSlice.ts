import { createSlice } from "@reduxjs/toolkit";

interface PaginationState {
  currentPage: number;
  totalPages: number;
  initialPage: number;
  showAllItems: boolean;
}

const initialState: PaginationState = {
  currentPage: 1,
  totalPages: 5,
  initialPage: 1,
  showAllItems: false,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setShowAllItems: (state) => {
      state.showAllItems = !state.showAllItems;
    },
  },
});

export const { setCurrentPage, setShowAllItems } = paginationSlice.actions;

export default paginationSlice.reducer;
