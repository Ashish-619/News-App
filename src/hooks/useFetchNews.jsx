import { useEffect, useState } from "react";

const useFetchNews = (query = "education") => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=a6c188526a184cef9743884390257fc2`;
        const res = await fetch(url);
        const data = await res.json();
        setNews(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]); 

  return { news, loading };
};

export default useFetchNews;
