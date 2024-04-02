import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/Slices/filtersSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const handleChangeFiltersInfo = (field, value) => {
    dispatch(setFilter({ field, value }));
  };
  return (
    <div className="flex">
      <div>
        <label>Search:</label>
        <input
          className="border-2 rounded  h-8"
          type="text"
          name="searchValue"
          onChange={(e) => {
            handleChangeFiltersInfo(e.target.name, e.target.value);
          }}
        />
      </div>
      <div className="ml-4">
        <label>Date:</label>
        <input
          className="border-2 rounded h-8"
          type="date"
          name="date"
          max={new Date().toISOString().split("T")[0]}
          onChange={(e) => {
            handleChangeFiltersInfo(e.target.name, e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
