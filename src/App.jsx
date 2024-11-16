import React, { useState, useEffect } from "react";
import useFetchNews from "./hooks/useFetchNews";
import NewsList from "./components/NewsList";
import NewsPreview from "./components/NewsPreview";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("education");
  const { news, loading } = useFetchNews(selectedCategory);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(10);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const handleLoadMore = () => setItemsToShow(itemsToShow + 10);

  // Handle screen resize for mobile view detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        <Header onCategorySelect={setSelectedCategory} />
        <div className={`flex-1 flex ${selectedArticle ? "" : "justify-center"} mt-16`}>
          <NewsList
            news={news.slice(0, itemsToShow)}
            onSelectArticle={setSelectedArticle}
            selectedArticle={selectedArticle}
            onLoadMore={handleLoadMore}
          />
          {selectedArticle && !isMobileView && (
            <NewsPreview article={selectedArticle} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
