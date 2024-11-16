import React, { useState } from "react";
import Modal from "./Modal"; // Import Modal for mobile news preview

function NewsList({ news, onSelectArticle, selectedArticle, onLoadMore, onCategorySelect }) {
    const [isMobilePreviewOpen, setMobilePreviewOpen] = useState(false);

    const handleArticleClick = (article) => {
        if (window.innerWidth <= 768) { // Mobile view check
            setMobilePreviewOpen(true);
        }
        onSelectArticle(article);
    };

    return (
        <div className="flex flex-col p-4 transition-all duration-300 w-full lg:w-2/3 overflow-y-auto">

            {/* News Items */}
            {news.map((article, index) => (
                <div
                    key={index}
                    className="flex flex-col sm:flex-row items-start p-4 mb-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100"
                    onClick={() => handleArticleClick(article)}
                >
                    <img
                        src={article.urlToImage || "/placeholder.jpg"}
                        alt="News"
                        className="w-full sm:w-2/4 h-auto object-cover rounded mr-0 sm:mr-4 mb-4 sm:mb-0"
                    />
                    <div className="w-full">
                        <h2 className="text-lg font-bold">{article.title}</h2>
                        <p className="text-sm text-gray-500">
                            <span className="font-semibold">short by {article.author || "Unknown Author"}</span> /{" "}
                            {new Date(article.publishedAt).toLocaleString()}
                        </p>
                        <p className="mt-2 text-gray-700">{article.description}</p>
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline mt-2 inline-block"
                        >
                            Read more at {article.source?.name || "source"}
                        </a>
                    </div>
                </div>
            ))}

            {/* Load More Button */}
            {news.length > 0 && (
                <button
                    onClick={onLoadMore}
                    className="mt-4 w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                    Load More
                </button>
            )}

            {/* Mobile News Preview Modal */}
            {isMobilePreviewOpen && selectedArticle && (
                <Modal isOpen={isMobilePreviewOpen} onClose={() => setMobilePreviewOpen(false)}>
                    <div className="p-4">
                        <h2 className="text-lg font-bold">{selectedArticle.title}</h2>
                        <p className="text-sm text-gray-500">
                            <span className="font-semibold">short by {selectedArticle.author || "Unknown Author"}</span> /{" "}
                            {new Date(selectedArticle.publishedAt).toLocaleString()}
                        </p>
                        <img
                            src={selectedArticle.urlToImage || "/placeholder.jpg"}
                            alt="News"
                            className="w-full h-48 object-cover rounded my-4"
                        />
                        <p className="text-gray-700">{selectedArticle.content}</p>
                        <a
                            href={selectedArticle.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline mt-2 inline-block"
                        >
                            Read more at {selectedArticle.source?.name || "source"}
                        </a>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default NewsList;
