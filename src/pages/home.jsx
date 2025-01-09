import Navbar from "../components/navbar/navbar";
import Footer from "../components/navbar/footer";
import Book from "../assets/image.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const highlights = [
    {
      title: "15+ Countries",
      description: "Active programs impacting millions globally.",
      icon: "🌍",
    },
    {
      title: "50,000+ Youth Empowered",
      description: "Through our youth development programs.",
      icon: "🌟",
    },
    {
      title: "10+ Awards",
      description: "Recognized for excellence in innovation and impact.",
      icon: "🏆",
    },
  ];

  const problemStatements = [
    {
      title: "Climate Change",
      description:
        "Rapid industrialization has led to rising global temperatures and environmental degradation. We aim to tackle this with sustainable practices.",
    },
    {
      title: "Educational Inequality",
      description:
        "Millions of children still lack access to basic education. Our goal is to make quality education accessible for everyone.",
    },
    {
      title: "Healthcare Accessibility",
      description:
        "Healthcare is a privilege for many, not a right. We are working to provide affordable healthcare solutions globally.",
    },
  ];
  const navigate=useNavigate();

  return (
    <section className="w-full h-full flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide bg-highlight_background">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full mt-16 flex flex-col items-center gap-12">
        {/* Hero Section */}
        <section className="w-full bg-important_text text-white p-8 flex flex-col items-center gap-4">
          <h1 className="text-5xl font-bold text-center">
            Empowering Communities, Shaping Futures
          </h1>
          <p className="text-lg text-center leading-relaxed max-w-2xl">
            Our mission is to drive positive change through innovation,
            education, and sustainability. Join us in our journey to make a
            difference.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-secondary hover:bg-Yellow hover:text-black text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl"
            onClick={()=>{navigate("/about")}}>
              Learn More
            </button>
            <button className="bg-white hover:bg-Yellow hover:text-black hover:border-0 text-secondary font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl "
            onClick={()=>{navigate("/contact")}}>
              Contact Us
            </button>
          </div>
        </section>

        {/* Problem Statements Section */}
        <section className="w-full p-8 bg-terinary flex flex-col items-center gap-8">
          <h2 className="text-3xl font-bold text-important_text">
            Tackling Global Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemStatements.map((problem, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center gap-4"
              >
                <h3 className="text-2xl font-semibold text-secondary">
                  {problem.title}
                </h3>
                <p className="text-gray-700 text-center">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights Section */}
        <section className="w-full p-8 flex flex-col items-center gap-8">
          <h2 className="text-3xl font-bold text-important_text">
            What We Have Achieved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center gap-4"
              >
                <div className="text-5xl">{highlight.icon}</div>
                <h3 className="text-2xl font-semibold text-important_text">
                  {highlight.title}
                </h3>
                <p className="text-gray-700">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Promotional Article Section */}
        <section className="w-full flex flex-col lg:flex-row items-cente lg:justify-between p-12 bg-primary text-white">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-4xl font-bold">The Future of Innovation</h2>
            <p className="text-lg leading-relaxed">
              Discover how we are leveraging cutting-edge technology to address
              the world's most pressing issues. Our commitment to sustainability
              and inclusivity drives every decision we make.
            </p>
            <p className="text-sm text-gray-300">
              By <strong>John Doe</strong> | Published: Dec 20, 2024
            </p>
            <button className="bg-secondary hover:text-black hover:bg-Yellow text-white font-bold py-2 px-6 w-40 rounded-lg shadow-lg hover:shadow-xl"
            onClick={()=>{navigate("/omni")}}>
              Read More
            </button>
          </div>
          {/* Right Image */}
          <div>
            <img
              src={Book}
              alt="Promotional Article"
              className="rounded-lg shadow-lg w-[40%] mt-3"
            />
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="w-full bg-important_text text-white p-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold">Join Our Mission</h2>
          <p className="text-lg text-center leading-relaxed max-w-xl">
            Become a part of a movement that's changing the world. Whether you
            want to volunteer, contribute, or collaborate, your support matters.
          </p>
          <button className="bg-secondary hover:text-black hover:bg-Yellow text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl"
          onClick={()=>{navigate("/grant")}}>
            Learn More
          </button>
        </section>
      </main>
      <Footer />
    </section>
  );
}
