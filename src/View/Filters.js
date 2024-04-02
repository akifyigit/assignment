import React from "react";
import SearchBar from "../Components/SearchBar";
import CreateNewFeed from "../Components/CreateNewFeed";

const Filters = () => {
  return (
    <div className="grid xl:flex md:flex sm:flex self-center justify-around mb-4 md: ">
      <SearchBar />
      <CreateNewFeed />
    </div>
  );
};

export default Filters;
