import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/navbar/footer";

export default function ApplyPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const position = searchParams.get("position"); 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
  };

  return (
    <section className="w-full h-full flex flex-col items-center gap-8 overflow-x-hidden bg-highlight_background">
      <Navbar />

      
      <section className="w-full h-64 bg-cover bg-center flex flex-col items-center justify-center text-white px-4 bg-highlight_background">
        <h1 className="text-5xl font-bold text-black px-6 py-2 rounded-lg">
          Apply for {position || "General Application"}
        </h1>
        <p className="text-lg font-medium mt-2 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          Fill out the form below to apply.
        </p>
      </section>

    
      <main className="w-full flex flex-col items-center gap-12 px-8 mb-4 mt-2">
        <form
          className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold text-primary mb-6">
            Application Form
          </h2>

        
          {position && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Applying for:
              </label>
              <input
                type="text"
                value={position}
                readOnly
                className="w-full p-2 rounded-md border-2 border-gray-300 bg-gray-100 focus:outline-none"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-full p-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>

        
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Upload Your Resume
            </label>
            <input
              type="file"
              className="w-full p-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>

          
          { position?(
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Why are you interested in this role? (optional)
            </label>
            <textarea
              placeholder="Share your thoughts"
              className="w-full p-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
              rows="4"
            ></textarea>
          </div>):(
             <div className="mb-4">
             <label className="block text-gray-700 font-medium mb-2">
               Which role are u interested in and why? (optional)
             </label>
             <textarea
               placeholder="Share your thoughts"
               className="w-full p-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
               rows="4"
             ></textarea>
             </div>

          )}

       
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </section>
  );
}
