import React, { useState } from "react";
import { Search, Sliders, Clock } from "lucide-react";
import Navbar from "../components/navbar/navbar";

const SearchFilters = () => (
  <div className="w-full  px-4 py-2 border-b border-gray-200">
    <div className="flex gap-4 overflow-x-auto scrollbar-hide">
      <button className="px-3 py-1 rounded-full bg-primary text-white text-sm whitespace-nowrap">
        All
      </button>
      <button className="px-3 py-1 rounded-full bg-highlight_background text-important_text text-sm whitespace-nowrap hover:bg-gray-200">
        Videos
      </button>
      <button className="px-3 py-1 rounded-full bg-highlight_background text-important_text text-sm whitespace-nowrap hover:bg-gray-200">
        Channels
      </button>
      <button className="px-3 py-1 rounded-full bg-highlight_background text-important_text text-sm whitespace-nowrap hover:bg-gray-200">
        Playlists
      </button>
    </div>
  </div>
);

const SearchResult = () => (
  <div className="w-full flex gap-4 p-4 hover:bg-gray-100 cursor-pointer">
    <div className="w-64 h-36 bg-gray-200 rounded-lg flex-shrink-0">
      <img
        src="/api/placeholder/320/180"
        alt="Video thumbnail"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-medium text-important_text line-clamp-2">
        How to Build a Search Page with React and Tailwind CSS
      </h3>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>10K views</span>
        <span>•</span>
        <span>2 days ago</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-200">
          <img
            src="/api/placeholder/32/32"
            alt="Channel avatar"
            className="w-full h-full rounded-full"
          />
        </div>
        <span className="text-sm text-gray-600">Channel Name</span>
      </div>
      <p className="text-sm text-gray-600 line-clamp-2">
        Learn how to create a professional search page using React and Tailwind
        CSS. We'll cover component structure, styling, and responsive design
        principles.
      </p>
    </div>
  </div>
);

const FilterButton = ({ Icon, text }) => (
  <button className="flex items-center gap-2 px-4 py-2 text-sm text-important_text hover:bg-gray-100 rounded-lg">
    <Icon size={16} />
    <span>{text}</span>
  </button>
);

export default function Searcht() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="w-full h-full flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide bg-highlight_background">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full mt-20 flex flex-col items-center gap-4">
        {/* Search Bar */}
        <div className="w-full  px-4">
          <div className="relative w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>

        {/* Filters */}
        <SearchFilters />

        {/* Filter Options */}
        <div className="w-full  px-4 flex gap-2">
          <FilterButton Icon={Sliders} text="Filters" />
          <FilterButton Icon={Clock} text="Upload date" />
        </div>

        {/* Search Results */}
        <div className="w-full  flex flex-col divide-y">
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
        </div>
      </main>
    </section>
  );
}
