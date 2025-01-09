import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/navbar/footer";
import {
  BookOpen,
  Book,
  FileText,
  Download,
  ExternalLink,
  Search,
} from "lucide-react";

export default function Omniscient() {
  const publications = {
    journals: [
      {
        title: "Journal of Educational Innovation",
        description:
          "Quarterly publication focusing on modern teaching methodologies",
        date: "December 2023",
        coverImage: "/api/placeholder/240/320",
        type: "Journal",
        price: "$29.99",
        link: "#",
      },
      {
        title: "Technology in Education Review",
        description:
          "Latest trends in educational technology and implementation",
        date: "November 2023",
        coverImage: "/api/placeholder/240/320",
        type: "Journal",
        price: "$24.99",
        link: "#",
      },
    ],
    books: [
      {
        title: "Modern Teaching Methods",
        description: "Comprehensive guide to contemporary education techniques",
        author: "Dr. Sarah Johnson",
        date: "2023",
        coverImage: "/api/placeholder/240/320",
        type: "Book",
        price: "$49.99",
        link: "#",
      },
      {
        title: "Digital Learning Excellence",
        description: "Strategic approaches to online education",
        author: "Prof. Michael Chen",
        date: "2023",
        coverImage: "/api/placeholder/240/320",
        type: "Book",
        price: "$39.99",
        link: "#",
      },
    ],
    materials: [
      {
        title: "Interactive Learning Toolkit",
        description: "Resource pack for engaging classroom activities",
        format: "Digital Download",
        date: "2023",
        type: "Educational Material",
        price: "$19.99",
        link: "#",
      },
      {
        title: "Assessment Framework Guide",
        description: "Comprehensive assessment strategies and templates",
        format: "Digital Download",
        date: "2023",
        type: "Educational Material",
        price: "$15.99",
        link: "#",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-highlight_background">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-primary text-white py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Omniscients Program</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Advancing education through cutting-edge publications, research
            journals, and comprehensive educational materials.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto -mt-8 px-4">
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search publications..."
            className="flex-1 outline-none text-gray-700"
          />
          <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Search
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full mx-auto px-8 py-16 space-y-16">
        {/* Featured Section */}
        <section>
          <h2 className="text-3xl font-bold text-important_text mb-8">
            Featured Publications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {publications.journals
              .slice(0, 1)
              .concat(publications.books.slice(0, 2))
              .map((pub, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={pub.coverImage}
                    alt={pub.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-Yellow text-important_text text-sm font-medium rounded-full">
                        {pub.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{pub.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-secondary font-bold">
                        {pub.price}
                      </span>
                      <button className="flex items-center gap-2 text-primary hover:text-secondary transition-colors">
                        Learn More <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Latest Journals */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-important_text">
              Latest Journals
            </h2>
            <button className="text-secondary hover:text-primary transition-colors flex items-center gap-2">
              View All Journals <ExternalLink className="h-4 w-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {publications.journals.map((journal, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <BookOpen className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">
                  {journal.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {journal.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-secondary font-bold">
                    {journal.price}
                  </span>
                  <button className="text-primary hover:text-secondary transition-colors">
                    Access
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Educational Materials */}
        <section className="bg-terinary bg-opacity-20 -mx-8 px-8 py-12 rounded-lg">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-important_text">
              Educational Materials
            </h2>
            <button className="text-secondary hover:text-primary transition-colors flex items-center gap-2">
              Browse All Materials <ExternalLink className="h-4 w-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {publications.materials.map((material, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">
                  {material.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {material.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-secondary font-bold">
                    {material.price}
                  </span>
                  <button className="flex items-center gap-2 text-primary hover:text-secondary transition-colors">
                    Download <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Books Showcase */}
        <section>
          <h2 className="text-3xl font-bold text-important_text mb-8">
            Featured Books
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {publications.books.map((book, index) => (
              <div
                key={index}
                className="flex bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-1/3 object-cover"
                />
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 mb-2">By {book.author}</p>
                  <p className="text-sm text-gray-600 mb-4">
                    {book.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-secondary font-bold">
                      {book.price}
                    </span>
                    <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                      Purchase Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
