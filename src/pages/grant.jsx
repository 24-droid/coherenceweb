import React from "react";
import Navbar from "../components/navbar/navbar";
import { motion } from "framer-motion";
import { ChevronRight, Download, Upload, CheckCircle } from "lucide-react";
import Footer from "../components/navbar/footer";

const GrantsPage = () => {
  const testimonials = [
    {
      name: "John Doe",
      message: "The grant helped me start my educational journey. Thank you!",
      institution: "XYZ University",
      role: "Ph.D. Student",
      year: "2023",
    },
    {
      name: "Jane Smith",
      message: "With the grant, we implemented a solar project in our school.",
      institution: "ABC High School",
      role: "Science Department Head",
      year: "2023",
    },
  ];

  const grantTypes = [
    {
      title: "Research Grants",
      description:
        "Supporting innovative research projects across all academic disciplines",
      amount: "Up to $50,000",
      duration: "12 months",
    },
    {
      title: "Educational Development",
      description:
        "Funding for curriculum development and educational resources",
      amount: "Up to $25,000",
      duration: "6-12 months",
    },
    {
      title: "Community Projects",
      description: "Supporting initiatives that benefit local communities",
      amount: "Up to $15,000",
      duration: "3-6 months",
    },
  ];

  return (
    <div className="min-h-screen bg-highlight_background">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-important_text text-white py-24 px-8 ">
        <div className=" mx-auto flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-6">Empowering Through Grants</h1>
          <p className="text-xl text-middle">
            Supporting innovation, education, and community development through
            our comprehensive grant programs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className=" mx-auto px-8 py-12 space-y-16">
        {/* Grant Types */}
        <section>
          <h2 className="text-3xl font-bold text-important_text mb-8">
            Available Grants
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {grantTypes.map((grant, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {grant.title}
                </h3>
                <p className="text-gray-600 mb-4">{grant.description}</p>
                <div className="space-y-2">
                  <p className="text-secondary font-semibold">
                    Amount: {grant.amount}
                  </p>
                  <p className="text-gray-500">Duration: {grant.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-important_text mb-8">
            Apply for a Grant
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Institution/Organization
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Purpose of Grant
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Proposed Use of Funds
              </label>
              <textarea
                rows="5"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Supporting Documents
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Drag and drop files here or click to browse
                </p>
                <input type="file" className="hidden" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium flex items-center justify-center gap-2"
            >
              Submit Application
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-3xl font-bold text-important_text mb-8">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-terinary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonial.role} at {testimonial.institution}
                    </p>
                    <p className="mt-4 text-gray-700 italic">
                      "{testimonial.message}"
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      Grant Recipient, {testimonial.year}
                    </p>
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
};

export default GrantsPage;
