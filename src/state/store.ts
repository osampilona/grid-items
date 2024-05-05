import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./pagination/paginationSlice";
import searchReducer from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
