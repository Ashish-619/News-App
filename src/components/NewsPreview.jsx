import React from "react";

function NewsPreview({ article }) {
  return (
    <div className="w-1/2 p-4 bg-white shadow-lg rounded-lg overflow-y-auto">
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <p className="text-sm text-gray-500">{article.author || "Unknown Author"}</p>
      <img src={article.urlToImage || "/placeholder.jpg"} alt="News" className="mt-4 w-full h-48 object-cover rounded" />
      <p className="mt-4 text-gray-700">{article.content || article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-600 underline"
      >
        Read full article
      </a>
    </div>
  );
}

export default NewsPreview;
