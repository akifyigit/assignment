import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filter: {
    category: "",
    searchValue: "",
    author: "",
    source: "",
    date: "",
  },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { field, value } = action.payload;
      state.filter[field] = value;
    },
    clearFilter: () => {
      return initialState;
    },
  },
});
export const filterSelector = (state) => state.filters.filter;
export const filtersReducer = filtersSlice.reducer;
export const { setFilter, clearFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
