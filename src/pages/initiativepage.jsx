import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/navbar/footer";

export default function InitiativesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const initiatives = [
    {
      title: "Global Health Monitoring System",
      category: "Healthcare",
      status: "Ongoing",
      timeline: "2023 - Present",
      impact: "250,000+ patients served",
      description:
        "A comprehensive health monitoring system that tracks patient progress across multiple healthcare facilities, enabling better coordination and care delivery.",
      keyFeatures: [
        "Real-time patient monitoring",
        "Cross-facility data sharing",
        "AI-powered health predictions",
      ],
      progress: 75,
      image: "/api/placeholder/600/400",
      budget: "$2.5M",
      team: "45+ Healthcare Professionals",
    },
    // ... other initiatives
  ];

  const categories = [
    "All",
    ...new Set(initiatives.map((item) => item.category)),
  ];

  return (
    <div className="min-h-screen bg-highlight_background">
      <Navbar />

      <main className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-medium">Our Initiatives</span>
          </div>
          <h1 className="text-6xl font-bold text-important_text mb-6">
            Our Initiative projects
          </h1>
          <p className="text-primary text-xl leading-relaxed">
            Transforming healthcare through innovative projects and meaningful
            initiatives.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-secondary text-white"
                  : "bg-white text-primary hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* New Card Design */}
        <div className="grid grid-cols-1 gap-8">
          {initiatives
            .filter(
              (item) =>
                selectedCategory === "All" || item.category === selectedCategory
            )
            .map((initiative, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Top Section with Status and Progress */}
                <div className="flex justify-between items-center mb-6">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-medium ${
                      initiative.status === "Completed"
                        ? "bg-terinary text-primary"
                        : initiative.status === "Ongoing"
                        ? "bg-Yellow text-primary"
                        : "bg-secondary/20 text-secondary"
                    }`}
                  >
                    {initiative.status}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-highlight_background rounded-full overflow-hidden">
                      <div
                        className="h-full bg-secondary transition-all duration-300"
                        style={{ width: `${initiative.progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-primary">
                      {initiative.progress}%
                    </span>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="col-span-2 space-y-4">
                    <h3 className="text-2xl font-bold text-primary">
                      {initiative.title}
                    </h3>
                    <p className="text-primary/70">{initiative.description}</p>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-primary/60">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {initiative.keyFeatures.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center p-3 bg-highlight_background rounded-lg">
                        <p className="text-sm text-primary/60 mb-1">Timeline</p>
                        <p className="font-medium text-primary">
                          {initiative.timeline}
                        </p>
                      </div>
                      <div className="text-center p-3 bg-highlight_background rounded-lg">
                        <p className="text-sm text-primary/60 mb-1">Budget</p>
                        <p className="font-medium text-primary">
                          {initiative.budget}
                        </p>
                      </div>
                      <div className="text-center p-3 bg-highlight_background rounded-lg">
                        <p className="text-sm text-primary/60 mb-1">Team</p>
                        <p className="font-medium text-primary">
                          {initiative.team}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl" />
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                        <p className="text-primary font-medium">
                          {initiative.impact}
                        </p>
                        <p className="text-sm text-primary/60">Impact</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 flex justify-end">
                  <button className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-300 group">
                    View Project Details
                    <svg
                      className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                        hoveredCard === index ? "translate-x-2" : ""
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
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
