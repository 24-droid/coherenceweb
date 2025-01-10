import Navbar from "../components/navbar/navbar";
import Footer from "../components/navbar/footer";
import { Link } from "react-router-dom"; // Correct import for Link
import Lottie from "react-lottie-player";
import animationData from "../assets/Animation - 1736496362955.json"

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
  ];

  return (
    <section className="w-full h-full flex flex-col items-center gap-8 overflow-x-hidden bg-highlight_background">
      <Navbar />

     
      <section className="w-full h-72 mt-20 bg-cover bg-center flex flex-row items-center justify-center text-white px-4 bg-highlight_background">
        <div className="text-center">
        <h1 className="text-5xl font-bold text-black px-6 py-2 rounded-lg">
          Careers at Our Company
        </h1>
        <p className="text-lg font-medium mt-2 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          Find your dream job and be part of an innovative, growing team.
        </p>
        </div>
        <div className="w-full lg:w-1/3 flex justify-end overflow-hidden">
            <Lottie
              loop
              animationData={animationData}
              play
              style={{ width: 200, height: 200 }}
            />
          </div>
      </section>

     
      <main className="w-full flex flex-col items-center gap-12 px-8 mb-4 mt-2">
       
        <section className="w-full flex flex-col gap-8">
          <h2 className="text-4xl font-bold text-important_text">
            Available Positions
          </h2>

          
          <div className="w-full flex flex-col gap-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="w-full flex justify-between items-center px-6 py-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary">
                      {position.title}
                    </h3>
                    <p className="text-gray-600">{position.description}</p>
                    <p className="text-sm text-gray-400">{position.date}</p>
                  </div>
                  <Link to={`/apply?position=${encodeURIComponent(position.title)}`}>
                    <button className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary transition-colors">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      
        <section className="w-full max-w-6xl flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-important_text text-center">
            Can't find a position? Submit a General Application!
          </h2>
          <Link to="/apply" className="text-center">
            <button className="bg-primary text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors mx-auto">
              General Application
            </button>
          </Link>
        </section>
      </main>

      <Footer />
    </section>
  );
}
