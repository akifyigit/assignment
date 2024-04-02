import React, { useEffect, useState } from "react";
import { fetchNews } from "../Api/Api";
import noImageFound from "../Assets/image/noImageFound.png";
import { filterSelector } from "../redux/Slices/filtersSlice";
import { useSelector } from "react-redux";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = () => {
    fetchNews({ category: filtersData.category }).then((articles) => {
      setArticles(articles);
    });
  };
  const filtersData = useSelector(filterSelector);

  useEffect(() => {
    const filtered = articles?.filter(
      (article) =>
        article?.date
          ?.toLowerCase()
          ?.includes(filtersData?.date?.toLowerCase()) &&
        article?.source
          ?.toLowerCase()
          ?.includes(filtersData?.source?.toLowerCase()) &&
        article?.author
          ?.toLowerCase()
          ?.includes(filtersData?.author?.toLowerCase()) &&
        article?.title
          ?.toLowerCase()
          ?.includes(filtersData?.searchValue?.toLowerCase())
    );
    const data = filteredData?.length ? filtered : articles;
    setFilteredData(data);
  }, [
    filtersData?.date,
    filtersData?.searchValue,
    filtersData?.author,
    filtersData?.source,
    articles,
  ]);
  useEffect(() => {
    fetchData();
  }, [filtersData?.category]);
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:m-20 lg:m-20 m-10 ">
        {filteredData?.map((article, index) => (
          <li
            key={index}
            className="border-2 rounded border-gray-300 shadow-lg p-5  hover:shadow-2xl hover:dark:md:hover:bg-slate-50 bg-gray-200 " //background blur ekle
          >
            <h3 className="mb-10">{article.title}</h3>
            <img
              src={article.image || noImageFound}
              alt={article.title}
              className="w-full h-40 object-cover"
            />
            <p className="lg:block mt-10">{article?.content?.slice(0, 200)}</p>
            <a
              className="float-right m-4 text-blue-600"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              See more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
