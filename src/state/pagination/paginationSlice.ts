import { createSlice } from "@reduxjs/toolkit";

interface PaginationState {
  currentPage: number;
  totalPages: number;
  inititalPage: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  totalPages: 5,
  inititalPage: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;
