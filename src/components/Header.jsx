import React, { useState } from "react";
import photo from "../assets/header-photo.png";
import { Menu, X } from "lucide-react";

// Language Selector Component
const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <div className="inline-flex rounded overflow-hidden bg-gray-600/20 border-white box-border">
      <button
        className={`px-4 py-1 text-sm ${
          selectedLanguage === "English" ? "text-gray-700 bg-white" : "text-white"
        }`}
        onClick={() => setSelectedLanguage("English")}
      >
        English
      </button>
      <button
        className={`px-4 py-1 text-sm ${
          selectedLanguage === "Hindi" ? "text-gray-700 bg-white" : "text-white"
        }`}
        onClick={() => setSelectedLanguage("Hindi")}
      >
        हिंदी
      </button>
    </div>
  );
};

// Side Menu Component
const SideMenu = ({ isOpen, onClose, onCategorySelect }) => {
  const categories = [
    "India",
    "Business",
    "Politics",
    "Sports",
    "Technology",
    "Startups",
    "Entertainment",
    "Hatke",
    "International",
    "Automobile",
    "Science",
    "Travel",
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#303036] transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col h-full text-white">
          <div className="flex justify-between items-center mb-6">
            <LanguageSelector />
            <button onClick={onClose} className="text-white p-1">
              <X size={20} />
            </button>
          </div>

          <div className="text-sm text-gray-400 mb-4">Categories</div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => {
                      onCategorySelect(category); // Notify parent about category selection
                      onClose(); // Close the side menu
                    }}
                    className="block py-2 text-white hover:bg-white/10 transition-colors w-full text-left"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

// Header Component
const Header = ({ onCategorySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b">
      <div className="flex items-center h-[60px] px-4">
        <button
          className="flex items-center gap-2 text-[14px] text-gray-700"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={20} />
          <span>Menu</span>
        </button>
        <div className="flex-1 flex justify-center">
          <img src={photo} alt="inshorts" className="h-8" />
        </div>
      </div>

      <SideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onCategorySelect={onCategorySelect} // Pass down prop
      />
    </header>
  );
};

export default Header;
