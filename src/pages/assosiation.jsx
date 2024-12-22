import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";

export default function AssociationsPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const associations = [
    {
      name: "United Nations",
      logo: "/api/placeholder/400/200",
      description:
        "Partnered for global development initiatives focusing on sustainable healthcare solutions and medical research advancement.",
      yearEstablished: "2020",
      projectCount: "15+ Projects",
      location: "New York, USA",
      expertise: ["Global Health", "Research", "Development"],
      achievements: "Successfully implemented 5 major healthcare programs",
    },
    {
      name: "World Health Organization",
      logo: "/api/placeholder/400/200",
      description:
        "Collaborating on global healthcare projects to improve medical accessibility and enhance treatment methodologies worldwide.",
      yearEstablished: "2019",
      projectCount: "25+ Projects",
      location: "Geneva, Switzerland",
      expertise: ["Healthcare", "Policy", "Research"],
      achievements: "Published 12 collaborative research papers",
    },
    {
      name: "Yale Medicine",
      logo: "/api/placeholder/400/200",
      description:
        "Research collaboration on kidney disease with groundbreaking discoveries in treatment methods and patient care protocols.",
      yearEstablished: "2021",
      projectCount: "10+ Projects",
      location: "Connecticut, USA",
      expertise: ["Medical Research", "Clinical Trials", "Education"],
      achievements: "Developed 3 new treatment protocols",
    },
  ];

  return (
    <div className="min-h-screen bg-highlight_background">
      <Navbar />

      <main className="container mx-auto px-4 py-20">
        {/* Enhanced Header Section */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-important_text mb-6">
            Our Prestigious Partners
          </h1>
          <p className="text-primary text-xl leading-relaxed">
            We're proud to collaborate with leading organizations worldwide to
            advance healthcare and research. These partnerships drive innovation
            and excellence in medical care.
          </p>
        </div>

        {/* Enhanced Associations Grid */}
        <div className="space-y-16 px-4 mx-auto">
          {associations.map((assoc, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Enhanced Image Section */}
                <div className="relative overflow-hidden h-80 md:h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/30" />
                  <img
                    src={assoc.logo}
                    alt={assoc.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/80 to-transparent">
                    <p className="text-white text-sm font-medium">
                      {assoc.location}
                    </p>
                  </div>
                </div>

                {/* Enhanced Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                      {assoc.name}
                    </h3>
                    <p className="text-primary/80 text-lg leading-relaxed">
                      {assoc.description}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {assoc.expertise.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-terinary/20 text-primary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Enhanced Partnership Details */}
                    <div className="grid grid-cols-2 gap-6 pt-4">
                      <div className="p-4 bg-highlight_background rounded-lg">
                        <p className="text-sm text-primary/60 mb-1">
                          Partnership Since
                        </p>
                        <p className="text-primary font-semibold">
                          {assoc.yearEstablished}
                        </p>
                      </div>
                      <div className="p-4 bg-highlight_background rounded-lg">
                        <p className="text-sm text-primary/60 mb-1">Scale</p>
                        <p className="text-primary font-semibold">
                          {assoc.projectCount}
                        </p>
                      </div>
                    </div>

                    {/* Achievements Section */}
                    <div className="pt-4">
                      <p className="text-sm text-primary/60 mb-2">
                        Key Achievement
                      </p>
                      <p className="text-primary">{assoc.achievements}</p>
                    </div>
                  </div>

                  {/* Enhanced Call to Action */}
                  <button className="mt-8 inline-flex items-center text-secondary font-semibold group-hover:text-primary transition-colors duration-300">
                    View Partnership Details
                    <svg
                      className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                        hoveredIndex === index ? "translate-x-2" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
