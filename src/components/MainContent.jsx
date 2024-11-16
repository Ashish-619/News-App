import React, { useState, useEffect } from 'react';

const NewsCard = ({ title, short, timestamp, source, image }) => (
  <div className="bg-white rounded shadow-sm mb-4 p-4 max-w-[600px] mx-auto">
    <img src={image} alt={title} className="w-full h-[300px] object-cover mb-4 rounded" />
    <h1 className="text-[20px] font-medium mb-4 text-[#44444d]">{title}</h1>
    <div className="flex items-center gap-2 text-[12px] text-[#808290] mb-4">
      <span>{short}</span>
      <span>by {short}</span>
      <span>{timestamp}</span>
    </div>
    <p className="text-[14px] text-[#44444d] leading-6 mb-4">
      {source}
    </p>
    <div className="text-[12px] text-[#808290]">
      read more at NDTV Profit
    </div>
  </div>
);

const MainContent = () => {
  const [newsItems, setNewsItems] = useState([]);
  
  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?' +
      'q=Apple&' +
      'from=2024-11-14&' +
      'sortBy=popularity&' +
      'apiKey=a6c188526a184cef9743884390257fc2';
      
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Skip the first 5 news items because showing "removed"
        const newsToDisplay = data.articles.slice(5);
        
        setNewsItems(newsToDisplay);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <main className="mt-[108px] lg:ml-[240px] bg-[#f4f4f4] min-h-screen p-4">
      {newsItems.map((news, index) => (
        <NewsCard key={index} {...news} />
      ))}
    </main>
  );
};

export default MainContent;
