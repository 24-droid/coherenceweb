import Navbar from "../components/navbar/navbar";

export default function CareerPage() {
  const positions = [
    {
      title: "Frontend Developer",
      description: "Build modern web interfaces using React.js.",
      date: "Posted: Jan 15, 2024",
    },
    {
      title: "Backend Developer",
      description: "Design and maintain scalable backend systems.",
      date: "Posted: Jan 10, 2024",
    },
    {
      title: "Backend Developer",
      description: "Design and maintain scalable backend systems.",
      date: "Posted: Jan 10, 2024",
    },
  ]; // Example positions

  return (
    <section className="w-full h-full flex flex-col items-center gap-8 overflow-x-hidden  bg-highlight_background">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="w-full h-72 mt-20 bg-cover bg-center flex flex-col items-center justify-center text-white px-4 bg-highlight_background">
        <h1 className="text-5xl font-bold text-black px-6 py-2 rounded-lg">
          Careers at Our Company
        </h1>
        <p className="text-lg font-medium mt-2 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          Find your dream job and be part of an innovative, growing team.
        </p>
      </section>

      {/* Main Content */}
      <main className="w-full flex flex-col items-center gap-12 px-8 mb-4 mt-2">
        {/* Careers Section */}
        <section className="w-full  flex flex-col gap-8">
          <h2 className="text-4xl font-bold text-important_text ">
            Available Positions
          </h2>

          {/* Job Listings */}
          <div className="w-full flex flex-col gap-6">
            {positions.map((position, index) => (
              <details
                key={index}
                className="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
              >
                <summary className="w-full flex justify-between items-center px-6 py-4 cursor-pointer">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary">
                      {position.title}
                    </h3>
                    <p className="text-gray-600">{position.description}</p>
                    <p className="text-sm text-gray-400">{position.date}</p>
                  </div>
                  <span className="text-secondary text-lg font-bold">
                    Apply Now +
                  </span>
                </summary>

                {/* Job Application Form */}
                <div className="px-6 py-4 bg-terinary text-white transition-max-height duration-500 ease-in-out max-h-0 group-open:max-h-screen">
                  <form className="w-full flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="p-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="p-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                      required
                    />
                    <input
                      type="file"
                      className="p-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Why are you interested in this role?"
                      className="p-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* General Application Section */}
        {positions.length === 0 && (
          <section className="w-full max-w-6xl flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-important_text text-center">
              No Positions Available
            </h2>
            <form className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow mx-auto">
              <h3 className="text-2xl font-bold text-primary">
                General Application
              </h3>
              <div className="flex flex-col gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="p-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                  required
                />
                <input
                  type="file"
                  className="p-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Position/Area of Interest"
                  className="p-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </section>
        )}
      </main>
    </section>
  );
}
