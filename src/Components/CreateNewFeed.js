import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../Api/Api";
import { setFilter } from "../redux/Slices/filtersSlice";

const CreateNewFeed = () => {
  const dispatch = useDispatch();
  const [newsSources, setNewsSources] = useState([]);

  useEffect(() => {
    fetchNews("", "", "").then((news) => {
      setNewsSources(news);
    });
  }, []);

  const handleChangeFiltersInfo = (field, value) => {
    dispatch(setFilter({ field, value }));
  };
  return (
    <div className=" grid md:flex ">
      <select
        className="border-2 mr-2 h-8 rounded "
        name="source"
        onChange={(e) => handleChangeFiltersInfo(e.target.name, e.target.value)}
      >
        <option value="">Select a source</option>
        {[...new Set(newsSources.map((news) => news.source))].map(
          (source, index) => (
            <option key={index} value={source}>
              {source}
            </option>
          )
        )}
      </select>
      <select
        className="border-2 mr-2 h-8 rounded "
        name="category"
        onChange={(e) => handleChangeFiltersInfo(e.target.name, e.target.value)}
      >
        <option value="">Select a Category</option>
        {[...new Set(newsSources.map((news) => news.category))].map(
          (category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          )
        )}
      </select>

      <select
        className="border-2 mr-2 h-8 rounded"
        name="author"
        onChange={(e) => handleChangeFiltersInfo(e.target.name, e.target.value)}
      >
        <option value="">Select an Author</option>
        {[...new Set(newsSources.map((news) => news.author))].map(
          (author, index) => (
            <option key={index} value={author}>
              {author}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default CreateNewFeed;
