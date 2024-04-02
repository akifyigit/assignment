export async function fetchNews({ category }) {
  const newsApi = process.env.REACT_APP_NEWS_API;
  const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
  const guardianApi = process.env.REACT_APP_GUARDIAN_API;
  const guardianApiKey = process.env.REACT_APP_GUARDIAN_API_KEY;
  const nytApi = process.env.REACT_APP_NYT_API;
  const nytApiKey = process.env.REACT_APP_NYT_API_KEY;

  try {
    let newsData;
    let guardianData;
    let nytData;
    await fetch(
      `${newsApi}?country=us&category=${category}&apiKey=${newsApiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        newsData = data.articles;
      });

    await fetch(
      `${guardianApi}?tag=${category}/${category}&api-key=${guardianApiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        guardianData = data.response.results;
      });

    await fetch(`${nytApi}?api-key=${nytApiKey}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        nytData = data.results;
      });

    const news = newsData?.map((article) => ({
      date: article.publishedAt.substring(0, 10),
      author: article.author,
      title: article.title,
      content: article.content,
      image: article.urlToImage,
      url: article.url,
      source: article.source.name,
      category: null,
    }));
    const guardian = guardianData?.map((article) => ({
      date: article.webPublicationDate.substring(0, 10),
      author: "",
      title: article.webTitle,
      content: "",
      image: "",
      url: article.webUrl,
      source: article.sectionName,
      category: article.pillarName,
    }));

    const nyt = nytData
      ? nytData.map((article) => ({
          date: article.published_date,
          author: article.byline,
          title: article.title,
          content: article.abstract,
          image: article?.media[0]?.["media-metadata"].url?.[2],
          url: article.url,
          source: article.source,
          category: article.nytdsection,
        }))
      : [];
    const data = [...news, ...guardian, ...nyt];
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
