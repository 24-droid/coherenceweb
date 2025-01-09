import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/navbar/footer";
import {
  Search,
  Calendar,
  Clock,
  User,
  Tag,
  ChevronLeft,
  ChevronRight,
  Filter,
  BookOpen,
} from "lucide-react";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "education", label: "Education" },
    { id: "technology", label: "Technology" },
    { id: "research", label: "Research" },
    { id: "innovation", label: "Innovation" },
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Educational Technology",
      excerpt:
        "Exploring how AI and machine learning are transforming the educational landscape...",
      author: "Dr. Sarah Johnson",
      date: "December 15, 2023",
      readTime: "8 min read",
      category: "technology",
      image: "/api/placeholder/800/400",
      featured: true,
    },
    {
      id: 2,
      title: "Innovation in Remote Learning",
      excerpt:
        "Best practices and emerging trends in remote education delivery...",
      author: "Prof. Michael Chen",
      date: "December 10, 2023",
      readTime: "6 min read",
      category: "innovation",
      image: "/api/placeholder/800/400",
      featured: true,
    },
  ];

  const blogPosts = [
    {
      id: 3,
      title: "Effective Teaching Strategies",
      excerpt: "Modern approaches to engaging students in the digital age...",
      author: "Emma Wilson",
      date: "December 5, 2023",
      readTime: "5 min read",
      category: "education",
      image: "/api/placeholder/400/300",
    },
    // Add more blog posts...
  ];

  return (
    <div className="min-h-screen bg-highlight_background">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-primary text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Educational Insights</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the latest trends, research, and innovations in education
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className=" mx-auto -mt-8 px-4">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              Search
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className=" mx-auto px-8 py-16">
        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-important_text mb-8">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-Yellow text-important_text text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {post.author}
                      </span>
                    </div>
                    <button className="text-secondary hover:text-primary transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regular Posts */}
        <section>
          <h2 className="text-2xl font-bold text-important_text mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src="/api/placeholder/400/200"
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-terinary bg-opacity-30 text-primary text-xs rounded-full">
                      Education
                    </span>
                    <span className="text-sm text-gray-500">Dec 5, 2023</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Understanding Modern Learning Methods
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Exploring the latest trends in educational methodologies and
                    their impact...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">5 min read</span>
                    <button className="text-secondary hover:text-primary transition-colors text-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-16">
          <button className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50">
            <ChevronLeft className="h-5 w-5" />
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
